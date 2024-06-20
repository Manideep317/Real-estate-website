import React, { Suspense } from 'react'
import Card from '../../components/Card';

export default async function Properties() {
  const url = "https://manideep317.github.io/real-estate-data/data.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return (
    <div className='w-full h-full grid grid-flow-cols grid-cols-4 px-[10rem] py-[8vh]'>
    <Suspense>
    {
      data.map((props,index)=>(
          <Card prop={props} key={index}/>
      ))
    }
    </Suspense>
    </div>
  )
}
