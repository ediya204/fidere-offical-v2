import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("en","disclaimer");
export default function Page(){return <LegalPage locale="en" slug="disclaimer"/>;}
