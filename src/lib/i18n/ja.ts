import interfaceMessages from "./ja-interface.json";
import serviceMessages from "./ja-services.json";
import institutionMessages from "./ja-institution.json";

const messages: Record<string, string> = {
  ...interfaceMessages,
  ...serviceMessages,
  ...institutionMessages,
};

export function japaneseText(source: string): string {
  if (!Object.hasOwn(messages, source)) {
    throw new Error(`Missing Japanese translation: ${source}`);
  }
  return messages[source];
}
