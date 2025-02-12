import Image from "next/image";
import "./scrollbar.css"
import Card from "./Card";
import { Suspense } from "react";
export default async function Carousel() {
  const url = "https://manideep317.github.io/real-estate-data/data.json";
  const response = await fetch(url);
  const data = await response.json();
  return (
    <div>
    <Suspense >
    <div className="flex gap-4 overflow-y-hidden overflwo-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory p-4 overflow-scroll">
          {
            data.slice(0,15).map((prop) => (
              <div key={prop.id}  className="snap-center">
                <Card prop={prop}/>
              </div>
            ))
          }
      </div>
    </Suspense>

      
    </div>
  )
}
