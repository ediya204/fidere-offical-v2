"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function MotionEnhancements() {
 const pathname = usePathname();
 useEffect(() => {
   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
   const elements = Array.from(document.querySelectorAll<HTMLElement>(".section-heading, .image-reveal, .statement-copy, .principle"));
   const observer = new IntersectionObserver((entries)=> entries.forEach(entry=> {if(entry.isIntersecting) {entry.target.classList.add("is-revealed");observer.unobserve(entry.target);}}),{threshold:0.12});
   elements.forEach(el=> {if(el.getBoundingClientRect().top > window.innerHeight) {el.classList.add("will-reveal");observer.observe(el);}});
   return ()=>{observer.disconnect();elements.forEach(el=>el.classList.remove("will-reveal","is-revealed"));};
 },[pathname]);
 return null;
}
