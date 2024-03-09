import React from 'react'
import Image from 'next/image'
import logo from "@/public/Logo.png"
export default function Footer() {
  return (
    <div>
      <div className="">
        <Image src={logo} alt='estatein' />
        
      </div>
    </div>
  )
}
