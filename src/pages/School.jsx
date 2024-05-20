import React from 'react'

import CTA from '../components/CTA';

import Timeline from '../components/Timeline';
import { useTranslation } from "react-i18next";
import { skills} from '../constants/index-global'
import { useEffect } from "react"


const School = () => {

const { t } = useTranslation();

useEffect(() => {
  document.title = 'School'
},[]);

  return (
    <section className="max-container">
  
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text dark:text-slate-200">
         {t('School.title')}
        </h3>      
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
          <p>
            {t('School.introduction')}
          </p>
        </div>  

        <div className="mt-12 flex">
        <Timeline type="experiences"/>
        </div>
      <div className='subhead-text dark:text-slate-200'>
        Certification 
      </div>

      {/* <div>
        <Timeline type="sport"/>
      </div> */}


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text dark:text-slate-300">
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
            <div className='hidden text-black dark:text-slate-500 font-semibold text-sm absolute mt-24 bg-slate-400/85 px-3 rounded-2xl group-hover:block dark:bg-slate-300'>
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