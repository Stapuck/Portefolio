import React from 'react'

import { quickview } from '../constants'

const QuickView = () => {

  const lgSite = document.documentElement.lang;

  // console.log(lgSite);

  
 
  // peut être que 2 docs et non 3 
  return (
    <section className='border-2 border-black p-3 m-4 rounded-xl bg-red-400/80'>
        <h1 className='text-2xl flex justify-center items-center m-2 mb-6 underline '>Quick View</h1>
        <div className='grid  md:grid-cols-2 gap-4 pb-2'>
          {quickview.map((qv) => (
          // <div key={qv.title} className={`${qv.lg === lgSite || qv.lg === "all" ?  "block" : "hidden" }`}>
          <div key={qv.title} className={`${qv.lg === lgSite || qv.lg === "all" ?  "block" : "hidden" }`}>
            <div  className={`${qv.bgcolor} border-2 border-black rounded-xl flex flex-col items-center hover:scale-105 `}>
              <div className='flex justify-center items-center w-full h-full'>
                <img 
                src={qv.image} 
                alt={qv.title}
                className='h-[85%] w-[85%] object-contain py-2' />
              </div>
              <a 
                href={qv.pdf} 
                // href={`${qv.lg === lgSite ?  "download.lg": "" }`}  //Todo revoir pour que le telechargement se fasse dans la bonne langue
                // faut que ça marche aussi pour le standard qui est français anglais - all. 
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