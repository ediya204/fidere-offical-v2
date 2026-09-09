"use client";
import { useState } from "react";
import { type Locale, pathFor, text } from "@/lib/site";
import { Arrow } from "./editorial";
import Link from "next/link";
export function PersonaSelector({ locale }: { locale: Locale }) {
 const [active,setActive]=useState(0);
 const personas=[
  {title:text(locale,"Private Client","私人客戶","私人客户"),copy:text(locale,"A considered structure for your assets and the generations to follow.","為當下資產與世代傳承，作審慎安排。","为当下资产与世代传承，作审慎安排。"),anchor:"private-trust"},
  {title:text(locale,"Family Office","家族辦公室","家族办公室"),copy:text(locale,"Continuity in the administration of your family’s wealth.","為家族財富管理，建立持續有序的安排。","为家族财富管理，建立持续有序的安排。"),anchor:"family-office"},
  {title:text(locale,"Corporate Client","企業客戶","企业客户"),copy:text(locale,"Fiduciary and administrative support for your business interests.","為企業權益，提供信託及行政支援。","为企业权益，提供信托及行政支持。"),anchor:"corporate-trust"},
 ];
 return <div className="persona-selector"><div className="container"><div className="persona-top"><span className="eyebrow">{text(locale,"I AM A…","我是⋯","我是⋯")}</span><div className="persona-tabs" role="tablist" aria-label={text(locale,"Client type","客戶類別","客户类别")}>{personas.map((item,i)=><button key={item.anchor} id={`persona-tab-${i}`} aria-controls="persona-panel" role="tab" aria-selected={active===i} tabIndex={active===i?0:-1} onKeyDown={e=> {if(["ArrowRight","ArrowLeft","Home","End"].includes(e.key)){e.preventDefault();const next=e.key==="Home"?0:e.key==="End"?2:(active+(e.key===(locale==="ar"?"ArrowLeft":"ArrowRight")?1:2))%3;setActive(next);document.getElementById(`persona-tab-${next}`)?.focus();}}} onClick={()=>setActive(i)}>{item.title}<Arrow/></button>)}</div></div><div id="persona-panel" className="persona-panel" role="tabpanel" aria-labelledby={`persona-tab-${active}`} tabIndex={0}><p>{personas[active].copy}</p><Link href={pathFor(locale,`solutions/${personas[active].anchor}`)}>{text(locale,"Explore your solutions","探索專屬方案","探索专属方案")}<Arrow/></Link></div></div></div>;
}
