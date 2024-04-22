import React from 'react'

import CTA from '../components/CTA';

import Timeline from '../components/Timeline';
import { useTranslation } from "react-i18next";
import { skills} from '../constants'

const School = () => {

const { t } = useTranslation();


  return (
    <section className="max-container">
  
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
         {t('School.title')}
        </h3>      
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
          </p>
        </div>  

        <div className="mt-12 flex">
        <Timeline type="experiences"/>
        </div>
      <div>
        mettre certification 
      </div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
      
      <div className="mt-16 flex flex-wrap gap-12 mb-5">
        {skills.map((skill, index) => (
          <div key={index} className=' group block-container w-20 h-20 relative flex justify-center'>
            <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
              <img 
              src={skill.imageUrl} 
              alt={skill.name} 
              className='w-1/2 h-1/2 object-contain'
              /> 
            </div>
            <div className='hidden text-black font-semibold text-sm absolute mt-24 bg-slate-600 px-3 rounded-2xl group-hover:block'>
              {skill.name}
            </div>
          </div>
        ))}
        </div>
      </div>


     

   


      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>
      <CTA/>

      </div>

    </section>
  )
}

export default School