import React, { useEffect } from 'react'
import CTA from '../components/CTA';

import AccordionSchool from '../components/AccordionSchool';



const About = () => {
  useEffect(() => {
    document.title = 'About me'
  },[]);

  return (
    <section className="max-container">

      <h1 className='head-text justify-center underline'>Un Double project</h1>

      <div className="flex mt-3 h-96">
        <div className="w-1/2 border-r-4 border-black-500 flex justify-center">
          <h2 className='underline'>Sportif</h2>
        </div>
        <div className="w-1/2 flex justify-center ">
          <h2 className='underline'>Professionnel </h2>
        </div>
      </div>


      

      

      <div className='py-1 my-6'>
        <div className="my-2">
        <AccordionSchool title='test 1' answer='ça fonctionne correctement ?'/>
        </div>
        <div className="my-2">
        <AccordionSchool title='test 2' answer='ça marche ?'/>
        </div>
        <div className="my-2">
        <AccordionSchool title='test 3' answer='j ai pas tout pété ?'/>
        </div>
      </div>

      

      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>

       <CTA/>
    </section>
  )
}

export default About