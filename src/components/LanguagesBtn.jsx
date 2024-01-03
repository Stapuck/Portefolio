import React, { useEffect, useState } from 'react'
import { languages } from '../constants'


import i18next from 'i18next'



const LanguagesBtn = () => {
  // TODO: faire un beau bouton ou on ne vois que la langue selectionné
  // const [isOpen, setIsOpen] = useState(false);

  return (

   // {/* install flag librairie : npm install flag-icon-css */}
    <div className='flex flex-col'> 
        {languages.map(({code, name, country_code}) => ( 
        <button 
          className='dark:text-white'
          key={country_code} 
          onClick={()=> i18next.changeLanguage(code)} 
          // disabled={code === currentLanguageCode}
        //   hidden={code !== currentLanguageCode}  // === ou  !== bete d'idée à revoir 
        >  
          {name}
        </button>
      ))}
    </div>
  )
}

export default LanguagesBtn