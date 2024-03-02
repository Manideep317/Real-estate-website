import Image from "next/image";
import "./scrollbar.css"
import Card from "./Card";
export default async function Review() {
  const url = "https://manideep317.github.io/real-estate-data/data.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return (
    <div>
    <div className="flex overflow-y-hidden gap-[1rem] overflow-scroll">
          {
            data.slice(0,15).map((prop) => (
                <Card prop={prop}/>
            ))
          }
        </div>

      
    </div>
  )
}

