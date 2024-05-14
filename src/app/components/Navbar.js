import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Logo.png';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
    return (
        <header className='py-[1rem] z-50 top-0 flex items-center px-[1.5rem] fixed min-w-full bg-[#1A1A1A]'>
            <div className="flex justify-between max-md:hidden items-center w-full">
                <div className="flex items-center">
                    <Image alt='estatein' src={logo} />
                </div>
                <div className="min-w-[30%] flex justify-between">
                    <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">Home</Link>
                    <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">About us</Link>
                    <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/properties">Properties</Link>
                    <Link className='p-3 rounded-md active:bg-black active:border-[#262626] active:border-spacing-2' href="/">Services</Link>
                </div>
                <div className="min-w-[180px] flex items-center justify-between mx-2">
                    <Link href="/login" className='px-4 py-2 rounded-md bg-[#703BF7] hover:scale-105 hover:shadow-white hover:shadow-md hover:transition-shadow'>Login</Link>
                    <Link href="/signup" className='px-3 py-2 rounded-md bg-black font-semibold text-[#703bf7] hover:scale-105 hover:shadow-[#703bf7] hover:bg-white hover:text-[#703bf7] hover:shadow-md hover:transition-shadow'>Signup</Link>
                </div>
            </div>
            <MobileNavbar className="w-full" />
        </header>
    );
}
