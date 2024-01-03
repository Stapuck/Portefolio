import React, { useEffect } from 'react'

import ThemeMode from '../components/ThemeMode';
import LanguagesBtn from '../components/LanguagesBtn';


import cookies from 'js-cookie'

import { languages } from '../constants'

import { useTranslation } from "react-i18next"





const Home = () => {
 //TODO: gestion du stokage en cookie pour que si on rafraichi ça reste sur la derniere langue utiliser 

  // dans tous les fichiers
    const { t } = useTranslation()

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    useEffect(() => {
      document.title = 'TS | Home'

      document.body.dir = currentLanguage.dir || 'ltr'
    },[currentLanguage]); //currentLanguage

  // fin de tous les fichier ( sauf le document title qui n'est pas à prendre ) revoir 

  return (
    // <section className='w-full h-screen relative'>
    <section className='max-container'>

      <h1 className="head-text">
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'> Terence</span> 
      </h1>


      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
        </p>
      </div>  

      <div className='fixed z-40 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 flex flex-col justify-center items-center border-2 border-slate-700 dark:border-slate-300'>
        <ThemeMode/> 
        <LanguagesBtn/>
      </div>


      
{/*      
      <div className="absolute top-28 left-0 right-0 z-10 flex flex-col items-center justify-center">
        <h1 className="d-flex flex-columns align-items-start text-2xl font-semibold dark:text-white">
          {t('welcome_to_react')}
        </h1>

        <p className='dark:text-white'>{t('project.e')}</p>

      </div> */}
 
    </section>
  )
}

export default Home