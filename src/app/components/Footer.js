import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/Logo.png"
export default function Footer() {
  return (
    <div className='py-[1rem] z-50 justify-between bg-[#141414] flex max-sm:flex-col px-[5rem] min-w-full'>
      <div className="py-[1rem]">
        <Image src={logo} alt='estatein' />
      </div>
      <div className="grid text-center py-[1rem] place-content-start grid-flow-row grid-cols-3 gap-[1vw] text-[#a2a8a8]">
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>About us</Link>
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>Properties</Link>
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>Services</Link>
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>Testimonials</Link>
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>Login</Link>
      <Link className='hover:text-white hover:scale-110 transition ease-out delay-100' href={"/"}>Signup</Link>
      </div>
      <div className="">
      
      </div>
    </div>
  )
}
