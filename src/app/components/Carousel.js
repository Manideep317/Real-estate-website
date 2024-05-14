import Image from "next/image";
import "./scrollbar.css"
import Card from "./Card";
import { Suspense } from "react";
export default async function Carousel() {
  const url = "https://manideep317.github.io/real-estate-data/data.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return (
    <div>
    <Suspense >
    <div className="flex overflow-y-hidden gap-[1rem] overflow-scroll">
          {
            data.slice(0,15).map((prop) => (
                <Card key={data.id} prop={prop}/>
            ))
          }
      </div>
    
    </Suspense>

      
    </div>
  )
}
