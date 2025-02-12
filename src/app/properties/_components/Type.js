import React from 'react'

export default function Type({propertyType}) {
  return (
    <div className='px-[0.75rem] flex items-center justify-center py-[1rem]'>
      <p className='text-white px-[0.75rem] rounded-lg border-2 py-[0.5rem]'>{propertyType}</p>
    </div>
  )
}
