import Image from "next/image"
import Link from "next/link"
function Card({prop}) {
  return (
    <div className="bg-[#14141480] hover:shadow-lg hover:shadow-[#703bf7] lg:min-w-[20rem] md:min-w-[20rem] max-sm:h-[10rem] sm:w-[350px] flex text-white justify-between lg:w-[25vw]  md:max-w-[50vw] flex-col p-4 max-sm:w-[92vw] md:h-[400px] sm:h-[380px]  max-md:min-h-[400px] max-md:w-[] py-[0.75rem] rounded-lg my-2">
              <div className="mx-auto relative max-sm:h-[70%] overflow-hidden rounded-lg max-lg:h-[50%] max-md:h-[80%] md:h-[65%] h-[70%] w-[100%]">
                  <Image alt={prop.villa_name} className="rounded-lg transition delay-150 ease-in hover:scale-105" fill src={prop?.images[0]}/>
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
                      <Link href={`/properties/${encodeURIComponent(prop.id)}`} className="bg-[#703BF7] border-[#703bf7] hover:scale-105 hover:shadow-md hover:shadow-white border-2 max-sm:p-2 p-4 lg:p-3 rounded">View Property</Link>
                    </div> 
                  </div>
                </div>
              </div>
  )
}

export default Card
