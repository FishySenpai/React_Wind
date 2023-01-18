import React from 'react'
import {Getanime} from './Getanime';
import Search from './Search';
const  summer2022 = ()=> { 
  return (
    <div className="bg-main">
      <div className="">
        <div className="flex text-gray-500 text-2xl hover:text-red-500 cursor-pointer ml-16 md:ml-40 lg:ml-64 pt-4 w-48"></div>
        <div className="flex ml-16 md:ml-40 lg:ml-64 pt-4 w-48">
          
        </div>
        <div className="px-6 items-center mx-auto container justify-between">
          <Getanime />
        </div>
      </div>
    </div>
  );
}
export default summer2022