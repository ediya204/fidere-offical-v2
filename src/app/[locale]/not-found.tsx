"use client";
import { useParams } from "next/navigation";
import { NotFoundContent } from "@/components/not-found-content";
import { isLocale } from "@/lib/site";
export default function NotFound(){
 const params=useParams<{locale?:string}>();
 const locale=params.locale&&isLocale(params.locale)?params.locale:"en";
 return <NotFoundContent locale={locale}/>;
}
