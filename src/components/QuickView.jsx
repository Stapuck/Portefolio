import React from 'react'
import test1 from '../assets/PDF/test.pdf'

import { quickview } from '../constants'

const QuickView = () => {

  
 
  // peut être que 2 docs et non 3 
  return (
    <section className='border-2 border-black p-3 m-4 rounded-xl bg-red-400/80'>
        <h1 className='text-2xl flex justify-center items-center m-2 '>Quick View </h1>
        <div className='grid md:grid-cols-3 gap-4'>
          {quickview.map((qv) => (
            <div key={qv.title} className={`${qv.bgcolor} border-2 border-black  rounded-xl flex flex-col items-center`}>
              <div className='flex justify-center items-center w-full h-full '>
                <img 
                src= {qv.image} 
                alt={qv.title}
                className='h-[60%] w-[60%] object-contain' />
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
              
            </div>
          ))}
        </div>
      </section>
  )
}

export default QuickView