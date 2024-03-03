import React from 'react'

function RCard() {
  return (
    <div>
    <div className="bg-[#141414] max-sm:h-[400px] lg:w-[25vw] md:w-[50vw] flex-col p-4 max-sm:w-[90vw] md:h-[460px] sm:h-[469px]  max-md:min-h-[500px] py-[0.75rem] rounded-lg my-4 px-[0.75rem]">
                
                <div className="mt-[0.5rem]">
                  <div className="">
                    <h3 className="font-medium text-lg">{prop.villa_name}</h3>
                    <p className="text-md text-[#999999]">{prop.villa_location}</p>
                  </div>
                  <div className="flex my-2 items-center justify-between">
                    <div className="">
                      <p className="text-[#99999999]">Price</p>
                      <h3 className="text-[1.2rem]">${prop.price}</h3>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default RCard
