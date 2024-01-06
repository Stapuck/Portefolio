import React from 'react'

import SchoolTimeline from '../components/SchoolTimeline';
import CTA from '../components/CTA';

import { skills } from '../constants';
import BacktoTopBtn from '../components/BacktoTopBtn';
import { Accordion } from '@material-tailwind/react';
import AccordionSchool from '../components/AccordionSchool';
import Timeline from '../components/Timeline';

const School = () => {
  return (
    <section className="max-container">
  
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          Work Experience
        </h3>      
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
          </p>
        </div>  

        <div className="mt-12 flex">
        <Timeline type="experiences"/>
        </div>


        <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
      
      <div className="mt-16 flex flex-wrap gap-12 mb-5">
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
          <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
            {/* <p> {skill.name}</p> */}
            {/* <p>{skill.type}</p> */}
            <img 
             src={skill.imageUrl} 
             alt={skill.name} 
             className='w-1/2 h-1/2 object-contain'
             /> 
          </div>
         </div>
        ))}
        </div>
      </div>


      <div>

        mettre certification 

      </div>


      <div className='bg-gray-200 rounded-xl py-1 my-6'>
        <AccordionSchool title='test 1' answer='ça fonctionne correctement ? '/>
        <AccordionSchool title='test 2' answer='ça marche ? '/>
        <AccordionSchool title='test 3' answer='j ai pas tout pété ? '/>
      </div>

   

      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>
      <CTA/>

      </div>

    </section>
  )
}

export default School