"use client";
import Image from "next/image";
import { useState } from "react";
import { type Locale, text } from "@/lib/site";
import { Arrow, SectionLabel } from "./editorial";
export function LocationSection({locale}:{locale:Locale}) {
 const [active,setActive]=useState(0);
 const locations=[
  {name:text(locale,"Hong Kong","香港","香港"),coordinate:"22.3193° N / 114.1694° E",image:"/images/hero-hong-kong.jpg",alt:"Victoria Harbour and the Hong Kong skyline at dusk"},
  {name:text(locale,"Singapore","新加坡","新加坡"),coordinate:"1.3521° N / 103.8198° E",image:"/images/singapore.jpg",alt:"Singapore’s Marina Bay and financial district"},
  {name:text(locale,"United States","美國","美国"),coordinate:"40.7128° N / 74.0060° W",image:"/images/new-york.jpg",alt:"New York City’s skyline and waterfront"},
  {name:text(locale,"Bahrain","巴林","巴林"),coordinate:"26.2235° N / 50.5876° E",image:"/images/bahrain.jpg",alt:"Bahrain World Trade Center and Manama waterfront at dusk"},
 ];
 return <section className="location-section dark-section"><div className="location-background" aria-hidden="true">{locations.map((place,i)=><Image key={place.image} src={place.image} alt="" fill sizes="100vw" className={i===active?"is-active":""} quality={85}/>)}</div><div className="location-shade"/><div className="container location-content"><div className="section-heading"><SectionLabel index="04">{text(locale,"GLOBAL ASSET INFRASTRUCTURE","跨境資產安排","跨境资产安排")}</SectionLabel><h2>{text(locale,"Assets rarely live\nin one jurisdiction.","資產所及，\n不止一地。","资产所及，\n不止一地。")}</h2><p>{text(locale,"Banking, custody and administration can span borders. We coordinate account arrangements around the needs of the trust structure.","銀行、託管與行政安排往往跨越國界。我們圍繞信託架構的需要，協調各地賬戶安排。","银行、托管与行政安排往往跨越国界。我们围绕信托架构的需要，协调各地账户安排。")}</p></div><div className="location-switcher" aria-label={text(locale,"Explore jurisdictions","探索司法管轄區","探索司法管辖区")}>{locations.map((place,i)=><button key={place.name} aria-pressed={i===active} onPointerEnter={e=>{if(e.pointerType==="mouse")setActive(i);}} onFocus={()=>setActive(i)} onClick={()=>setActive(i)}><span className="location-number">0{i+1}</span><span className="location-name">{place.name}</span><Arrow/><span className="location-coordinate">{place.coordinate}</span></button>)}</div><p className="location-note">{text(locale,"Jurisdictions shown reflect account arrangements described by FIDERE, not office locations. Availability is subject to the structure, client eligibility and local requirements.","所示司法管轄區為 FIDERE 描述的賬戶安排地點，並非辦事處所在地。服務視乎架構、客戶資格及當地要求而定。","所示司法管辖区为 FIDERE 描述的账户安排地点，并非办事处所在地。服务视乎架构、客户资格及当地要求而定。")}</p></div></section>;
}
