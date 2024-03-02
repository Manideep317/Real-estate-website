'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Logo.png';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
    const [pageWidth, setPageWidth] = useState(window.screen.width);

    useEffect(() => {
        setPageWidth(window.screen.width);
        console.log(window.screen.width);
    }, [window]);

    return (
        <header className='py-[1rem] z-50 top-0 flex items-center px-[1.5rem] fixed min-w-full bg-[#1A1A1A]'>
            {
                pageWidth > 850 ? (
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <Image alt='estatein' src={logo} />
                        </div>
                        <div className="min-w-[30%] flex justify-between">
                            <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">Home</Link>
                            <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">About us</Link>
                            <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">Properties</Link>
                            <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">Services</Link>
                        </div>
                        <div className="">
                            <button>Contact us</button>
                        </div>
                    </div>

                ) : (
                    <MobileNavbar />
                )
            }

        </header>
    );
}
