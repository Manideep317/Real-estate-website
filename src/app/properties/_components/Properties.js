import React, { Suspense } from 'react';
import Card from '@/src/app/components/Card';

export default async function Properties() {
  const url = "https://manideep317.github.io/real-estate-data/data.json";
  const response = await fetch(url);
  const data = await response.json();

  return (
    <div className="w-full h-full grid place-items-center grid-flow-row-dense py-[8vh] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 sm:px-8 lg:px-16 py-10">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((props, index) => (
          <Card prop={props} key={index} />
        ))}
      </Suspense>
    </div>
  );
}
