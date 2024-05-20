import React from 'react'
import { useEffect, useState } from 'react';

import { quickview } from '../constants/index-global'

const QuickView = () => {
  const lgSite = document.documentElement.lang;
  const theme = localStorage.getItem('theme');

 
  return (
    <section className='border-2 border-black p-3 m-4 rounded-xl bg-blue-300/75 dark:bg-cyan-200/75'>
        <h1 className='text-2xl flex justify-center items-center m-2 mb-6 underline'>Quick View</h1>
        <div className='grid  md:grid-cols-2 gap-4 pb-2'>
          {quickview.map((qv) => (
          <div key={qv.title} className={`${qv.lg === lgSite || qv.lg === "all" ?  "block" : "hidden" }`}>
            <div  className={`${qv.bgcolor} border-2 border-black rounded-xl flex flex-col items-center hover:scale-105 `}>
            {/* <div  className={`${theme == "dark" ? qv.darkbgcolor : qv.bgcolor} border-2 border-black rounded-xl flex flex-col items-center hover:scale-105`}> */}
              <div className='flex justify-center items-center w-full h-full'>
                <img 
                src={qv.image} 
                alt={qv.title}
                className='h-[85%] w-[85%] object-contain py-2' />
              </div>
              <a 
                href={qv.pdf} 
                download={qv.title}
                className=' text-xl flex flex-row mb-2'>
                  {qv.title}
                  <div 
                    className='ml-2 text-2xl'
                  >
                    <ion-icon name="download-outline"></ion-icon>
                  </div>
              </a>
              <div>
                  
                </div>
            </div>
          </div>

          ))}
        </div>
      </section>
  )
}

export default QuickView