import React from 'react'
import google from '@/public/google.svg'
import facebook from "@/public/facebook.svg"
import apple from "@/public/apple.svg"
import Image from 'next/image'
import sideImg from '@/public/login.avif'
import Link from 'next/link'
export default function page() {

  
  return (
    <div className='w-full flex h-screen'>
      <div className="md:w-[50svw] md:h-full">
        <Image src={sideImg} className='max-h-full' />
      </div>
      <div className="md:w-[50svw] max-md:w-[100vw] md:h-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center w-[600px] min-h-[700px]">
          <h3 className='text-2xl font-semibold'>Signup</h3>
          <form action="">
            <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" className='px-1 bg-[#141414] my-2 py-1 focus:outline-none focus:border-b-2'/>
            </div>
            <div className="flex flex-col my-2">
              <label>Password</label>
              <input className='px-1 bg-[#141414] my-2 py-1 focus:outline-none focus:border-b-2' type='password'/>
            </div>
            <div className="flex flex-col my-2">
              <label>Confirm Password</label>
              <input className='px-1 bg-[#141414] my-2 py-1 focus:outline-none focus:border-b-2' type='password'/>
            </div>
            <button className='my-4 text-center bg-white text-black w-[100%] py-2 font-semibold text-lg hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg hover:border-l-[#703fb3] rounded-3xl'>Submit</button>
          </form>
          <div className="md:w-[40%] flex items-center justify-center h-[1px] bg-slate-500 mb-2">
            <span className='bg-black px-1'>or</span>
          </div>
          <div className="flex gap-4">
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={google}/></button>
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={facebook}/></button>
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={apple}/></button>
          </div>
          <p className="">if you already have account? <Link className='underline' href="/login">login</Link></p>

        </div>
      </div>
    </div>
  )
}
