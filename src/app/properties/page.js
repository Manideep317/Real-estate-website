import React from 'react'
import Card from '@/src/app/components/Card.js';
import Properties from './_components/Properties';
async function page() {
  return (
    <main className='w-full h-full bg-black'>
      <Properties/>
    </main>
  )
}
export default page;
