import React, { useEffect } from 'react'
import CTA from '../components/CTA';

import AccordionSchool from '../components/AccordionSchool';
import Countdown from '../components/Countdown';



const About = () => {
  useEffect(() => {
    document.title = 'About me'
  },[]);

  return (
    <section className="max-container">
      <div className='mb-36'>
        <Countdown></Countdown>
      </div>
      <h1 className='head-text flex justify-center underline mb-10'>Un Double project</h1>
      <div className="flex my-5 h-96">
        <div className="w-1/2 border-r-4 border-black-500 flex justify-center">
          <h2 className='underline'>Sportif</h2>
        </div>
        <div className="w-1/2 flex justify-center ">
          <h2 className='underline'>Professionnel </h2>
        </div>
      </div>

      <p>le sport a fait et fait partie intégrante de mon éducation, m'a permit d'apprendre des valeurs et de comprendre le monde d'une façon différente</p>
      
      <div className='py-1 my-6'>
        <div className="my-2">
        <AccordionSchool title='test 1'>
          test 1
        </AccordionSchool>
        </div>
        <div className="my-2">
        <AccordionSchool title='test 2'>
          test 2
        </AccordionSchool>
        </div>
        <div className="my-2">
        {/* <AccordionSchool title='test 3' answer='j ai pas tout pété ?'/> */}
        <AccordionSchool title='test 3'>
          test pour savoir si le slot fonctionne correctement test de test
        </AccordionSchool>
        </div>
      </div>
      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>
       <CTA/>
    </section>
  )
}

export default About