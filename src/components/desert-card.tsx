import React from 'react'
import { EllipsisVertical } from 'lucide-react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
const DesertCard = () => {
  return (
    <div className='w-full col-span-1 h-[300px] bg-white flex flex-col'>
        <div className='flex justify-between items-center p-4 w-full'>
            <h2 className='text-lg mb-2' style={{fontFamily: "Instrument Serif", fontWeight: 400, color: "#000000"}}>
                Desert Name
            </h2>
            <EllipsisVertical />
        </div>
        <Image
            src="/images/desert.jpg"
            alt="Desert Image"
            width={150}
            height={150}
            className='w-full h-[200px] object-cover'
        />
        <div className='flex items-center'>
            <Clock className='w-4 h-4 text-gray-900 mt-2 ml-4' />
            <span className='text-gray-900 ml-2 mt-2'>10 min</span>
        </div>
        <div className='flex justify-evenly items-center mt-2 p-2 text-[#888888]'>
            <span >American</span>
           <span className="text-gray-600 font-bold">•</span>
           <span>Soup</span>
              <span className="text-gray-600 font-bold">•</span>
              <span>Warm</span>
              <span className="text-gray-600 font-bold">•</span>


        </div>

    </div>
  )
}

export default DesertCard