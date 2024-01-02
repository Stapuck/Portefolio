import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next"
import DropDownLanguages from '../components/DropDownLanguages'
import i18next from 'i18next'
import cookies from 'js-cookie'

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
    dir: 'ltr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir: 'ltr'
  },
  {
    code: 'ar',
    name: 'Arabic',
    country_code: 'sa',
    dir: 'rtl'
  }
]


const Home = () => {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  
  


  const { t } = useTranslation()

  //TODO: gestion du stokage en cookie pour que si on rafraichi ça reste sur la derniere langue utiliser 
 

  useEffect(() => {
    document.title = 'TS | Home'

    document.body.dir = currentLanguage.dir || 'ltr'
  },[currentLanguage]);

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        PopUP
      </div> */}



      {/* install flag librairie : npm install flag-icon-css */}
       <div className='absolute top-40 left-0 right-0 z-10 flex flex-col items-center justify-center'>
        {/* <DropDownLanguages/> */}

        {languages.map(({code, name, country_code}) => ( 
          <button 
            key={country_code} 
            onClick={()=> i18next.changeLanguage(code)} 
            // disabled={code === currentLanguageCode}
          >  
            {/*flag*/}  
            {name}
          </button>
        ))}
       </div>

{/* revoir dans le cas de rajout de langue pq ça ne marche pas  */}
       

       {/* <div className="d-flex justify-content-end">
          <div className="dropdown">
            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs>
              dropdown
            </button>
            
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              {languages.map(({code, name, country_code}) => (
                <li key={country_code}>
                  <button className='dropdown-item'>
                    {/* <span className={`flag-icon flag-icon-${country_code} mx-2`}></span> 
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div> */}

      <div className="absolute top-28 left-0 right-0 z-10 flex flex-col items-center justify-center">
        <h1 className="d-flex flex-columns align-items-start text-2xl font-semibold">
          {t('welcome_to_react')}
        </h1>

        <p>{t('project.e')}</p>
        {/* <p>
          {t('test')}
        </p> */}
      </div>
 
    </section>
  )
}

export default Home