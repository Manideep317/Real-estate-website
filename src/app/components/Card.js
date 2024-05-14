import Image from "next/image"
function Card({prop}) {
  return (
    <div>
    <div className="bg-[#141414] max-sm:h-[10rem] sm:w-[350px] flex flex-col justify-between lg:w-[25vw]  md:max-w-[50vw] flex-col p-4 max-sm:w-[92vw] md:h-[400px] sm:h-[380px]  max-md:min-h-[400px] py-[0.75rem] rounded-lg my-4 px-[0.75rem]">
                <div className="mx-auto relative max-sm:h-[70%] overflow-hidden rounded-lg max-lg:h-[50%] max-md:h-[80%] md:h-[65%] h-[70%] w-[100%]">
                  <Image className="rounded-lg hover:scale-105" alt="property image" fill src={prop?.images[0]}/>
                </div>
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
                    <div className="">
                      <button className="bg-[#703BF7] max-sm:p-2 p-4 lg:p-3 rounded">View Property</button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Card
