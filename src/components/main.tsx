import React from 'react'
import ArrowButton from './ui/arrow-button'

const Main = () => {
  return (
      <div className=" mx-auto px-4  bg-[#eeede5] w-full pt-4">
        <div className="grid grid-cols-7 gap-8 h-full mb-4">
          {/* Hero Text */}
          <div className="col-span-2">
            <h2 className="text-3xl  text-gray-900 font-light mb-6 leading-tight">
              See what Ingredia has to offer that makes us the best
            </h2>
            <p className="text-xl text-gray-600">
              Explore our community and unique menus
            </p>
          </div>
          
          {/* Featured Cards */}
          <div className="col-span-5 h-full overflow-x-auto">
            <div className="flex gap-6 h-full">
              {/* Any Occasion Card */}
              <div className="bg-inherit shadow-md overflow-hidden h-full flex-shrink-0 w-80">
              <div className="flex flex-col ">
                <div className="bg-gray-200 h-[38vh] bg-cover bg-center" 
                     style={{backgroundImage: "url('images/image-1.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl  text-gray-900 mb-2">Any Occasion</h3>
                  <hr className="border-gray-600"/>
                  <p className="text-gray-600 mb-8">Streamline shopping experience</p>
                  <ArrowButton className='inline-flex items-center px-4 py-2 border border-gray-600  hover:bg-gray-50' text='MORE' textcolor='text-gray-900'/>
                  
                </div>
              </div>
            </div>
            
            {/* Gen Z Cookbook Card */}
            <div className="bg-inherit shadow-md overflow-hidden flex-shrink-0 w-80">
              <div className="flex flex-col">
                <div className="bg-yellow-100 h-[38vh] bg-cover bg-center"
                     style={{backgroundImage: "url('images/image-2.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl  text-gray-900 mb-2">Gen Z Cookbook</h3>
                  <hr className="border-gray-600"/>
                  <p className="text-gray-600 mb-4">Caribbean cooking made self-taught chef</p>
                <ArrowButton className='inline-flex items-center px-4 py-2 border border-gray-600  hover:bg-gray-50' text='MORE' textcolor='text-gray-900'/>

                </div>
              </div>
            </div>
            
            {/* Chris De La Rosa Card */}
            <div className="bg-inherit shadow-md overflow-hidden flex-shrink-0 w-80">
              <div className="flex flex-col">
                <div className="bg-orange-100 h-[38vh] bg-cover bg-center"
                     style={{backgroundImage: "url('images/image-3.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl  text-gray-900 mb-2">Chris De La Rosa</h3>
                  <hr className="border-gray-600"/>
                  <p className="text-gray-600 mb-4">Caribbean cooking made self-taught chef</p>
                  <ArrowButton className='inline-flex items-center px-4 py-2 border border-gray-600  hover:bg-gray-50' text='MORE' textcolor='text-gray-900'/>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600"/>
      </div>
  )
}

export default Main