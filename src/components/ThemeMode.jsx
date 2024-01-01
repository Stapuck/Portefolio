import React from 'react'
import { theme_options,  } from '../constants'
import { useEffect, useState } from 'react';



const ThemeMode = () => {
    const [theme, setTheme] = useState('dark');

    // TODO: revoir le stockage et la réimplementation du stockage
    
    // document.addEventListener("DOMContentLoaded", function() {
    //     var theme = localStorage.getItem("theme");

    //     if (theme === null) {
    //         theme = "dark";
    //         localStorage.setItem("theme", theme);
    //     }

    // });

    
    useEffect(() => {
    
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme","light");
        }
      }, [theme])
    

  return (
    // TODO:revoir l'emplacement du bouton et voir si plusieur page ou juste Home ? 
    <div className='fixed z-50 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 duration-1000'> 
     { theme_options?.map((th_opt) => (
          <button 
          key = {th_opt.text}
          onClick={()=> setTheme(th_opt.text)}
          className={`w-8 h-8 leading-9 rounded-full text-xl m-1 
          ${theme === th_opt.text ?  'text-sky-600' : 'text-black-500 dark:text-white'}`}
          >
            <ion-icon name={th_opt.icon}></ion-icon>
          </button> 
          ))
        }
      </div>
  )
}

export default ThemeMode
