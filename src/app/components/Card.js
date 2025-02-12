import Image from "next/image"
import Link from "next/link"
function Card({ prop }) {
  return (
    <div className="bg-[#14141480] hover:shadow-lg hover:shadow-[#703bf7] lg:min-w-[20rem] md:min-w-[20rem] max-sm:h-[10rem] sm:w-[350px] flex text-white justify-between lg:w-[25vw]  md:max-w-[50vw] flex-col p-4 max-sm:w-[92vw] md:h-[400px] sm:h-[380px]  max-md:min-h-[400px] max-md:w-[] py-[0.75rem] rounded-lg my-2">
      <div className="relative w-full h-[60%] overflow-hidden rounded-lg">
        <Image alt={prop.villa_name} className="rounded-lg transition delay-150 ease-in hover:scale-105" fill src={prop?.images[0]} />
      </div>
      <div className="mt-[0.5rem]">
        <div className="">
          <h3 className="font-medium text-lg">{prop.villa_name}</h3>
          <p className="text-md text-[#999999]">{prop.villa_location}</p>
        </div>

        <div className="flex my-2 items-center justify-between">
          <div className="max-md: ">
            <p className="text-[#99999999]">Price</p>
            <h3 className="text-[1.2rem]">${prop.price}</h3>
          </div>
          <Link
            href={`/properties/${encodeURIComponent(prop.id)}`}
            className="bg-[#703BF7] border-[#703bf7] border-2 hover:scale-105 hover:shadow-md hover:shadow-white
              text-white px-4 py-2 rounded transition-all"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
