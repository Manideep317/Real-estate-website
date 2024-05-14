import React from 'react'
import Image from 'next/image'
import logo from "@/public/Logo.png"
export default function Footer() {
  return (
    <div className='py-[1rem] z-50 flex max-sm:flex-col items-center px-[1.5rem] min-w-full'>
      <div className="py-[1rem]">
        <Image src={logo} alt='estatein' />
      </div>
      
    </div>
  )
}
