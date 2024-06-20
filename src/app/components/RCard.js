import React from 'react'
import Image from 'next/image'
function RCard({prop}) {
  return (
    <div>
    <div className="bg-[#141414] hover:scale-105 transition delay-100 ease-out lg:w-[30vw] sm:w-[350px] md:max-w-[50vw] flex-col p-4 max-sm:w-[92vw]  py-[0.75rem] rounded-lg my-4 px-[0.75rem]">
                
                <div className="mt-[0.5rem]">
                  
                  <div className="">
                    <h3 className="font-medium text-lg">{prop.review_title}</h3>
                    <p className="text-md text-[#999999]">{prop.review_subject}</p>
                  </div>
                  <div className="flex my-2 items-center mt-[1rem]">
                    <Image height={50} width={50} alt="" className='w-[40px] h-[40px] flex items-center justify-center rounded-full' src={prop.image}/>
                    <div className="mx-[0.5rem]">
                      <h3 className="text-[1.2rem]">{prop.name}</h3>
                      <p className="text-[#99999999]">{prop.place},{prop.country}</p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default RCard;
