import assert from "node:assert/strict";
import test from "node:test";
import { handleRequest } from "../workers/enquiry.js";

function request(body, { origin = "https://www.fideretrust.com", ip = crypto.randomUUID(), method = "POST", headers = {} } = {}) {
  return new Request("https://www.fideretrust.com/api/enquiry", {
    method,
    headers: { "Content-Type": "application/json", Origin: origin, "CF-Connecting-IP": ip, ...headers },
    body: method === "POST" ? JSON.stringify(body) : undefined,
  });
}

function validBody(overrides = {}) {
  return {
    name: "Alex Example",
    email: "alex@example.com",
    clientType: "Family Office",
    message: "Please contact me about a private trust structure.",
    website: "",
    interest: "private-trust",
    locale: "en",
    page: "/contact?interest=private-trust",
    startedAt: Date.now() - 3000,
    ...overrides,
  };
}

function context(body, options = {}) {
  const deliveries = [];
  return {
    deliveries,
    request: request(body, options),
    env: { EMAIL: { send: async (message) => { deliveries.push(message); } } },
  };
}

test("valid enquiry sends one escaped email with a fixed recipient", async () => {
  const testContext = context(validBody({ message: "Please explain <private> trust options." }));
  const response = await handleRequest(testContext.request, testContext.env);
  const result = await response.json();
  assert.equal(response.status, 200);
  assert.equal(result.ok, true);
  assert.match(result.reference, /^FT-\d{8}-[A-F0-9]{8}$/);
  assert.equal(testContext.deliveries.length, 1);
  assert.equal(testContext.deliveries[0].to, "info@fideretrust.com");
  assert.equal(testContext.deliveries[0].from.email, "website@mail.fideretrust.com");
  assert.equal(testContext.deliveries[0].replyTo, "alex@example.com");
  assert.match(testContext.deliveries[0].html, /&lt;private&gt;/);
  assert.doesNotMatch(testContext.deliveries[0].html, /<private>/);
});

test("invalid fields are rejected without sending", async () => {
  const testContext = context(validBody({ email: "invalid" }));
  const response = await handleRequest(testContext.request, testContext.env);
  assert.equal(response.status, 400);
  assert.equal(testContext.deliveries.length, 0);
});

test("honeypot submissions return a neutral success without sending", async () => {
  const testContext = context(validBody({ website: "https://spam.example" }));
  const response = await handleRequest(testContext.request, testContext.env);
  assert.equal(response.status, 200);
  assert.equal(testContext.deliveries.length, 0);
});

test("cross-origin requests are rejected", async () => {
  const testContext = context(validBody(), { origin: "https://example.com" });
  const response = await handleRequest(testContext.request, testContext.env);
  assert.equal(response.status, 403);
  assert.equal(testContext.deliveries.length, 0);
});

test("rapid automated submissions are rejected", async () => {
  const testContext = context(validBody({ startedAt: Date.now() }));
  const response = await handleRequest(testContext.request, testContext.env);
  assert.equal(response.status, 400);
  assert.equal(testContext.deliveries.length, 0);
});

test("unsupported methods are rejected", async () => {
  const testContext = context(validBody(), { method: "GET" });
  const response = await handleRequest(testContext.request, testContext.env);
  assert.equal(response.status, 405);
  assert.equal(testContext.deliveries.length, 0);
});
