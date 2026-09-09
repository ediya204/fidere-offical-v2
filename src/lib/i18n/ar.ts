import interfaceMessages from "./ar-interface.json";
import serviceMessages from "./ar-services.json";
import institutionMessages from "./ar-institution.json";

// English source strings are stable keys for the site's existing three-language
// content tuples. Coverage is checked before building a new locale.
const messages: Record<string, string> = {
  ...interfaceMessages,
  ...serviceMessages,
  ...institutionMessages,
};

export function arabicText(source: string): string {
  if (!Object.hasOwn(messages, source)) {
    throw new Error(`Missing Arabic translation: ${source}`);
  }
  return messages[source];
}
