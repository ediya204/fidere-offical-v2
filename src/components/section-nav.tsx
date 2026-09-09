"use client";
import { useEffect, useRef, useState } from "react";
export function SectionNav({items,label}:{items:{id:string;label:string}[];label:string}) {
 const [active,setActive]=useState(items[0]?.id??"");
 const details=useRef<HTMLDetailsElement>(null);
 useEffect(()=>{
  const targets=items.map(item=>document.getElementById(item.id)).filter((target):target is HTMLElement=>Boolean(target));
  let frame:number|null=null;
  const update=()=>{
   frame=null;
   const chapter=details.current?.closest("nav");
   // Keep the reading threshold stable while the header hides during anchor scrolling.
   const headerHeight=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||97;
   const readingLine=headerHeight+(chapter?.getBoundingClientRect().height??50)+26;
   let current=items[0]?.id??"";
   for(const target of targets){if(target.getBoundingClientRect().top<=readingLine)current=target.id;}
   setActive(current);
  };
  const schedule=()=>{if(frame===null)frame=requestAnimationFrame(update);};
  update();
  window.addEventListener("scroll",schedule,{passive:true});
  window.addEventListener("resize",schedule,{passive:true});
  return()=>{window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);if(frame!==null)cancelAnimationFrame(frame);};
 },[items]);
 const links=items.map((item,i)=><a key={item.id} href={`#${item.id}`} aria-current={active===item.id?"location":undefined} onClick={()=>{setActive(item.id);if(details.current)details.current.open=false;}}><span>0{i+1}</span>{item.label}</a>);
 return <nav className="chapter-nav" aria-label={label}><div className="container chapter-desktop">{links}</div><details ref={details} className="chapter-mobile"><summary>{label}<span>{items.find(item=>item.id===active)?.label}</span><span aria-hidden="true">⌄</span></summary><div>{links}</div></details></nav>;
}
