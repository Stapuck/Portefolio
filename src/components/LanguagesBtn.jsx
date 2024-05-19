import React, { useEffect, useState } from 'react'
import { languages } from '../constants'


import i18next from 'i18next'



const LanguagesBtn = () => {
  // TODO: faire un beau bouton ou on ne vois que la langue selectionné
  // ou juste modifier la langue selectionné pour voir le changement 
  // utilisé usestate pour changement de l'état dans la fonciton changelanguage pour la réinjecter dans le disable. 
 

  
  const changeLanguage = (code) => {
    i18next.changeLanguage(code); // Changer la langue avec i18next
    document.documentElement.lang = code; // Mettre à jour la langue de la page
  };


  return (
    <div className='flex flex-col'> 
        {languages.map(({code, name, country_code}) => ( 
        <button 
          className='dark:text-white hover:text-black'
          key={country_code} 
          onClick={() => changeLanguage(code)}
          // disabled={code === currentLanguageCode}
        // disabled={code === name}
        // hidden={code !== currentLanguageCode}  // === ou  !== bete d'idée à revoir 
        >  
          {name}
        </button>
      ))}
    </div>
  )
}

export default LanguagesBtn