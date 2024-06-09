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

      {/*  todo revoir pour aligné ça correctement ! */}

      {/*  faire un systeme d'onglet sinon ? et pour le contact page aussi ?  */}

      <h1 className='head-text flex justify-center underline mb-10 dark:text-white'>{t('About.double')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-gray-300 md:pr-4 pb-4 md:pb-0">
          <h2 className="text-xl font-bold mb-2 dark:text-slate-100">{t('About.athlete')}</h2>
          <p className="text-sm dark:text-slate-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet mauris velit.</p>
          <Link
            to="/sport"
            rel='noopener noreferrer'
            className='font-semibold text-blue-800 dark:text-blue-500 flex flex-row'
          >
            see all 
            <div className='ml-2 text-xl'><ion-icon name="arrow-forward-outline"></ion-icon></div>
          </Link>
        </div>

        <div className="md:border-b-0 border-b-2 border-gray-300 pb-4">
          <h2 className="text-xl font-bold mb-2 dark:text-slate-100">{t('About.professionnal')}</h2>
          <p className="text-sm dark:text-slate-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet mauris velit.</p>
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





{/* todo revoir pour ce p  */}
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
        <div className="my-2">
          <AccordionSchool title={t('About.accordion4q')}>
            {t('About.accordion4a')}
          </AccordionSchool>
        </div>
      </div>



      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>
       <CTA/>
    </section>
  )
}

export default About