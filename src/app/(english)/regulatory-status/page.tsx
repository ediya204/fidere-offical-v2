import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("en","regulatory-status");
export default function Page(){return <LegalPage locale="en" slug="regulatory-status"/>;}
