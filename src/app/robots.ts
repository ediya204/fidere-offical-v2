import type { MetadataRoute } from "next";
import { company } from "@/lib/site";
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${company.website}/sitemap.xml`,host:company.website};}
export const dynamic = "force-static";
