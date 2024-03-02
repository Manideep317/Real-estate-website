'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Logo.png';

export default function Navbar() {
    const [pageWidth, setPageWidth] = useState(window.screen.width);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setPageWidth(window.screen.width);
        console.log(window.screen.width);
    }, [window]);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className='py-[1rem] z-50 top-0 flex justify-between items-center px-[1.5rem] fixed min-w-full bg-[#1A1A1A]'>
            <div className="flex items-center">
                <Image src={logo}/>
            </div>
            {
                pageWidth > 850 ? (
                    <div className="flex">
                        <div className="">
                        <Link href="/">Home</Link>
                        <Link href="/">About us</Link>
                        <Link href="/">Properties</Link>
                        <Link href="/">Services</Link>
                        </div>
                        <div className="">
                            <button>Contact us</button>
                        </div>
                    </div>

                ) : (
                    <div className="">
                        {sidebarOpen ? (
                            <div className="flex cursor-pointer" onClick={handleSidebar}>
                                <div className="font-bold text-2xl">x</div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-end cursor-pointer" onClick={handleSidebar}>
                                <div className="bg-white w-[18px] h-[2px] mb-1"></div>
                                <div className="bg-white w-[18px] h-[2px] mb-1"></div>
                                <div className="bg-white w-[9px] h-[2px] mb-1"></div>
                            </div>
                        )}
                    </div>
                )
            }
            {sidebarOpen ? (
                <div className='fixed flex flex-col items-center top-[4rem] justify-between left-0 min-h-full min-w-full bg-[#141414]'>
                    <div className='min-w-full flex flex-col bg-[#141414]'>
                        <Link href='/' className="py-[2rem] text-center shadow-md hover:bg-black w-full px-4">Home</Link>
                        <Link href='/' className="py-[2rem] text-center shadow-md hover:bg-black w-full px-4">About us</Link>
                        <Link href='/' className="py-[2rem] text-center shadow-md hover:bg-black w-full px-4">Properties</Link>
                        <Link href='/' className="py-[2rem] text-center shadow-md hover:bg-black w-full px-4">Services</Link>
                    </div>
                    <div className='fixed bottom-10 border-2 p-[1rem] rounded-md hover:bg-black  border-[#262626]'>
                        <div>Contact us</div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
