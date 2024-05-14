"use client"
import React,{useState} from 'react'
import google from '@/public/google.svg'
import facebook from "@/public/facebook.svg"
import {auth} from '@/src/app/config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import apple from "@/public/apple.svg"
import Link from 'next/link'
import Image from 'next/image'
import sideImg from '@/public/login.avif'
import {redirect} from 'next/navigation'
export default function page() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const HandleSubmit=async()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(auth)
    redirect('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  return (
    <div className='w-full flex h-screen'>
      <div className="md:w-[50svw] md:h-full">
        <Image src={sideImg} className='max-h-full' />
      </div>
      <div className="md:w-[50svw] max-md:w-[100vw] md:h-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center w-[600px] min-h-[700px]">
          <h3 className='text-2xl font-semibold'>Login</h3>
          <form action={HandleSubmit}>
            <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className='px-1 bg-[#141414] my-2 py-1 focus:outline-none focus:border-b-2'/>
            </div>
            <div className="flex flex-col my-2">
              <label>Password</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} className='px-1 bg-[#141414] my-2 py-1 focus:outline-none focus:border-b-2' type='password'/>
            </div>
            <button type='submit' className='my-4 text-center bg-white text-black w-[100%] py-2 font-semibold text-lg hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg hover:border-l-[#703fb3] rounded-3xl'>Submit</button>
          </form>
          <div className="md:w-[40%] flex items-center justify-center h-[1px] bg-slate-500 mb-2">
            <span className='bg-black px-1'>or</span>
          </div>
          <div className="flex gap-4">
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={google}/></button>
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={facebook}/></button>
            <button className='w-[48px] h-[48px] hover:scale-105 hover:shadow-[#703fb3] hover:shadow-lg bg-white rounded-lg'><Image src={apple}/></button>
          </div>
          <p className="">if you don't have account? <Link className='underline' href="/signup">Signup</Link></p>

        </div>
      </div>
    </div>
  )
}
