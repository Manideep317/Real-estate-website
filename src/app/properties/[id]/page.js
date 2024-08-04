import React from 'react';
import Image from 'next/image';
import Type from '../_components/Type.';
import ImageSlider from '../_components/ImageSlider';


export default async function page({ params }) {
  try {
    const propertyId = parseInt(params.id, 10)
    const url = "https://manideep317.github.io/real-estate-data/data.json";
    const response = await fetch(url);
    const data = await response.json();
    const propertyData = data.find(property => propertyId === property.id);
    console.log(propertyData);
    return (
      <main className='overflow-x-hidden w-full md:h-screen py-[1rem] bg-black'>
        <div className="pt-[8vh] px-[5vw]">
          <div className="w-full my-2">
            <h1 className="text-white text-2xl text-[1.5rem] font-semibold">{propertyData.villa_name}</h1>
            <h3 className="text-[#f2f2f2] text-[0.9rem] font-medium">{propertyData.villa_location}</h3>
          </div>
          <div className="flex max-md:flex-col w-full  md:gap-[2rem] justify-center items-center px-[5rem] h-full">
            <div className="w-1/2 max-md:w-[90vw]">
              <ImageSlider images={propertyData.images} />
            </div>
            <div className="w-1/2 max-md:w-[90vw]">
              <div className="w-full flex items-center">
                <div className="w-1/2">
                  <h4 className="text-slate-300 text-[0.9rem] font-medium">{propertyData.tag_line}</h4></div>
                <div className="w-1/2 overflow-hidden">
                  <Type propertyType={propertyData.type_of_house} />
                </div>
              </div>
              <div className="py-4">
                <p className="text-white">{propertyData.description}</p>
              </div>
              <div className="w-full py-[1rem] justify-center items-center gap-[1rem] flex">
                <div className="w-1/3 bg-[#703bfd] rounded-lg py-[0.75rem] px-[0.25rem] font-semibold text-white text-center">{propertyData.area} Sq.ft</div>
                <div className="w-1/3 bg-[#703bfd] rounded-lg py-[0.75rem] px-[0.25rem] font-semibold text-white text-center">{propertyData.num_bedrooms} Bedrooms</div>
                <div className="w-1/3 bg-[#703bfd] rounded-lg py-[0.75rem] px-[0.25rem] font-semibold text-white text-center">{propertyData.num_bathrooms} Bathrooms</div>
              </div>
              <div className="">
                <h4 className="text-[1.25rem] font-bold text-white">Key features</h4>
                <ul>
                  {
                    propertyData.key_features.map((feature, index) => (
                      <li key={index} className='text-slate-300'>{feature}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="text-white">
                <p className="text-slate-500 text-[1.25rem]">Price</p>
                <p className="text-white text-[1.5rem] font-bold">${propertyData.price}</p>
              </div>
              <div className="py-[1rem]">
                <button className='text-white border-[#703bf7] border-2 py-[0.5rem] px-[1rem] rounded-lg hover:from-[#703bf7] hover:to-[#000000] hover:scale-105 hover:shadow-lg hover:shadow-[#703bf7]  hover:bg-gradient-to-br bg-black'>Buy Property</button>
              </div>
            </div>
          </div>


        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p className="text-[#ffa500]">Sorry, we were having some issues</p>;
  }
}
