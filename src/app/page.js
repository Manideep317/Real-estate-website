import Image from "next/image";
import homeImg from '@/public/homeImg.png'
import stamp from '@/public/home-stamp.png'
import hIcon from '@/public/home-icon.png'
import cash from '@/public/cash-icon.png'
import star from '@/public/star.png'
import sun from '@/public/sun-icon.png'
import building from '@/public/building-icon.png'
import Carousel from "./components/Carousel";
import Review from "./components/Review";
export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="lg:flex lg:flex-row-reverse pt-[3.7rem] w-full">

        <div className="flex flex-col lg:w-[50%] lg:h-[80vh] items-center relative">
          <Image src={homeImg} alt="building img" className="max-md:w-[90%] max-lg:w-[80%] max-lg:mt-[1rem] lg:h-[100%] lg:w-[100%] max-lg:rounded-lg" />
          <Image src={stamp} alt="stamp image" className="z-10 max-md:max-w-[30%] lg:-translate-x-[23vw] lg:translate-y-1/3 max-md:relative absolute max-md:right-[30%] max-md:bottom-[4rem]" />
        </div>
        <div className="mx-[1rem] lg:mx-[5vw] lg:my-auto flex flex-col justify-center lg:w-[50%]">
          <div className=" relative bottom-14">
            <h1 className="text-[1.8rem] lg:text-[3rem] font-semibold">Discover Your Dream<br /> Property with Estaein</h1>
            <p className="text-[1rem] text-gray-500">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className="max-lg:mt-[0.5rem] lg:my-[2rem] bottom-[3rem] flex max-md:flex-col gap-3 relative">
            <button className="max-md:w-full rounded-md py-3 lg:px-3 bg-[#141414]">Learn more...</button>
            <button className="max-md:w-full rounded-md py-3 lg:px-3 bg-[#703BF7]">Browse properties</button>
          </div>
          <div className="mb-[2.5rem] grid max-lg:grid-rows-2 lg:grid-cols-3 gap-2 mx-2">
            <div className="flex items-center py-4 bg-[#262626] rounded-lg justify-center flex-col">
              <h3 className="text-[1.25rem] font-semibold">200+</h3>
              <p className="text-slate-400">Happy customers</p>
            </div>
            <div className="flex items-center py-4 bg-[#262626] rounded-lg justify-center flex-col">
              <h3 className="text-[1.25rem] font-semibold">10k+</h3>
              <p className="text-slate-400 text-center">Properties for clients</p>
            </div>
            <div className="max-lg:col-span-2 py-2 flex items-center bg-[#262626] rounded-lg justify-center flex-col">
              <h3 className="text-[1.25rem] font-semibold">13+</h3>
              <p className="text-slate-400 text-center">years of experience</p>
            </div>
          </div>

        </div>

      </div>
      <div className="mx-2 mt-[0.25rem] border-4 border-[#141414] border-opacity-45 grid max-lg:grid-cols-2 lg:grid-cols-4 rounded-lg">
        <div className="py-[1rem] bg-[#242424] flex flex-col justify-center items-center border-2 border-opacity-50 border-[#343434] rounded-lg m-[0.25rem]">
          <Image alt="home icon" src={hIcon}></Image>
          <p className="text-center pt-2 text-[1.05rem]">Find your Dream Home</p>
        </div>
        <div className="py-[1rem] flex flex-col justify-center items-center border-2 bg-[#242424] border-opacity-50 border-[#343434] rounded-lg m-[0.25rem]">
          <Image alt="cash icon" src={cash}></Image>
          <p className="text-center pt-2 text-[1.05rem]">Unlock your property Value</p>
        </div>
        <div className="py-[1rem] border-2 flex flex-col justify-center items-center bg-[#242424] border-opacity-50 border-[#343434] rounded-lg m-[0.25rem]">
          <Image alt="buiding icon" src={building}></Image>
          <p className="text-center pt-2 text-[1.05rem]">Effortless Property Management</p>
        </div>
        <div className="py-[1rem] flex flex-col justify-center items-center border-2 bg-[#242424] border-opacity-50 border-[#343434] rounded-lg m-[0.25rem]">
          <Image alt="sun icon" src={sun}></Image>
          <p className="text-center pt-2 text-[1.05rem]">Smart Investments Informed Decisions</p>
        </div>
      </div>
      <div className="overflow-y-hidden mx-[1rem] mt-[3.7rem] lg:mx-[5vw]">

        <div className="flex items-center justify-between">
          <div className="flex flex-col md:w-[65%]">
            <h1 className="text-[1.8rem] lg:text-[3rem] font-semibold">Featured Properties</h1>
            <p className="text-[#999999]">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.</p>
          </div>
          <div className="max-md:hidden">
            <button className="bg-[#1A1A1A] rounded-lg p-4">View Properties</button>
          </div>
        </div>
        <Carousel />
      </div>
      <div className="overflow-y-hidden mx-[1rem] mt-[3.7rem] lg:mx-[5vw]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col md:w-[65%]">
            <h1 className="text-[1.8rem] lg:text-[3rem] font-semibold">What Our Clients Say</h1>
            <p className="text-[#999999]">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
          </div>
        </div>
        <Review />
      </div>
      <div className="overflow-y-hidden mx-[1rem] mb-[3.7rem] mt-[3.7rem] lg:mx-[5vw]">
        <div className="flex items-center max-sm:flex-col justify-between">
          <div className="flex flex-col md:w-[65%]">
            <h1 className="text-[1.8rem] lg:text-[3rem] font-semibold">Start Your Real Estate Journey Today</h1>
            <p className="text-[#999999]">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
          </div>
          <div className="max-lg:mt-[1rem] lg:my-[2rem] bottom-[3rem] flex max-md:flex-col gap-3">
          <button className="max-md:w-full max-sm:w-[95vh] rounded-lg py-3 lg:px-3 bg-[#703BF7]">Browse properties</button>
          </div>
        </div>
      </div>
    </main>
  );
}
