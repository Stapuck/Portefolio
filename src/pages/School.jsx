import React from 'react'

import CTA from '../components/CTA';

import AccordionSchool from '../components/AccordionSchool';
import Timeline from '../components/Timeline';
import { useTranslation } from "react-i18next";

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

      </div>

    </section>
  )
}

export default School