import Image from "next/image";
import "./scrollbar.css"
import RCard from "./RCard";
import { Suspense } from "react";
export default async function Review() {
  const url = "https://manideep317.github.io/real-estate-data/reviews.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return (
    <div>
    <Suspense>
    <div className="flex overflow-y-hidden gap-[1rem] overflow-scroll">
          {
            data.map((prop,index) => (
                <RCard prop={prop} key={index}/>
            ))
          }
      </div>   
    </Suspense> 
    </div>
  )
}

