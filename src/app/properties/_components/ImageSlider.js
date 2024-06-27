"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function ImageSlider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect((()=>{
        console.log(currentIndex);
    }),[currentIndex])
  return (
    <div className=''>
        <Image className='w-full rounded-md h-[100%]' src={images[currentIndex]} width={1800} height={1000}/>
        <div className="py-4 gap-2 w-full max-md:overflow-x-scroll flex">
            {
                images.map((link,index)=>(
                    <div className="w-1/4 max-md:w-1/2 h-full" key={index} onClick={(e)=>{setCurrentIndex(index)}}>
                        <Image src={link} width={1000} height={1000} className='w-full h-[100px] max-md:h-[50px]'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
