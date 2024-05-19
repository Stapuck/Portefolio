import React, { useEffect } from 'react'

import ThemeMode from '../components/ThemeMode';
import LanguagesBtn from '../components/LanguagesBtn';

import cookies from 'js-cookie';
import { languages } from '../constants';
import { useTranslation } from "react-i18next";

import QuickView from '../components/QuickView';
import SocialMContact from '../components/SocialMContact';




const Home = () => {

  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  useEffect(() => {
    document.title = 'TS | Home'
    document.body.dir = currentLanguage.dir || 'ltr'
  },[currentLanguage]); 


  return (
    // <section className='w-full h-screen relative'>
    <section className='max-container h-full w-full relative '>
      <h1 className="head-text ">
        <span className='text-black dark:text-white'>{t('Home.welcome')}</span>
        <span className='blue-gradient_text font-semibold drop-shadow '> {t('Home.Terence')}</span> 
      </h1>


      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <h2 className='font-semibold text-xl dark:text-slate-200'>En ecole d'ingénieur option informatique le jours, et sportif de haut niveau la nuit</h2>
        <p className='dark:text-slate-300'>
          {t('Home.introduction')}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
        </p>
      </div>  
     
      <QuickView/>

      {/* <div className='fixed z-40 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 flex flex-col justify-center items-center border-2 border-slate-700 dark:border-slate-300'>
        <ThemeMode/> 
        <LanguagesBtn/>
      </div>  */}
     

     <SocialMContact/>

    </section>
  )
}

export default Home