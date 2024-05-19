import React, { useEffect } from 'react'
import CTA from '../components/CTA';
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import AccordionSchool from '../components/AccordionSchool';
import Countdown from '../components/Countdown';


const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'About me'
  },[]);

  return (
    <section className="max-container">
      <div className='mb-36'>
        <Countdown></Countdown>
      </div>
      <h1 className='head-text flex justify-center underline mb-10 dark:text-white'>{t('About.double')}</h1>
      <div className="flex my-5 h-96">
        <div className="w-1/2 border-r-4 border-black-500 dark:border-slate-400 flex justify-center ">
          <h2 className='underline dark:text-slate-100/85'>Sportif</h2>


{/*  todo revoir pour aligné ça correctement ! */}

{/*  faire un systeme d'onglet sinon ? et pour le contact page aussi ?  */}

          <div>
            <Link
            to="/sport"
            rel='noopener noreferrer'
            className='font-semibold text-blue-800 dark:text-blue-500 flex flex-row'
          >
            see all 
            <div className='ml-2 text-xl' ><ion-icon name="arrow-forward-outline"></ion-icon></div>
          </Link>
          </div>

          

        </div>
        <div className="w-1/2 flex justify-center ">
          <h2 className='underline dark:text-slate-100/85'>Professionnel </h2>

          <Link
            to="/school"
            rel='noopener noreferrer'
            className='font-semibold text-blue-800 dark:text-blue-500 flex flex-row'
          >
            see all 
            <div className='ml-2 text-xl' ><ion-icon name="arrow-forward-outline"></ion-icon></div>
          </Link>
        </div>
      </div>


{/* revoir pour ce p  */}
      <p className='dark:text-white'>le sport a fait et fait partie intégrante de mon éducation, m'a permit d'apprendre des valeurs et de comprendre le monde d'une façon différente</p>
      
      <div className='py-1 my-6'>
        <div className="my-2">
          <AccordionSchool title={t('About.accordion1q')}>
            {t('About.accordion1a')}
          </AccordionSchool>
        </div>
        <div className="my-2">
          <AccordionSchool title={t('About.accordion2q')}>
            {t('About.accordion2a')}
          </AccordionSchool>
        </div>
        <div className="my-2">
          <AccordionSchool title={t('About.accordion3q')}>
            {t('About.accordion3a')}
          </AccordionSchool>
        </div>
      </div>
      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>
       <CTA/>
    </section>
  )
}

export default About