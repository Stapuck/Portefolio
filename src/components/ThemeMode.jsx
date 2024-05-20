import React from 'react'
import { theme_options } from '../constants/index-global'
import { useEffect, useState } from 'react';






const ThemeMode = () => {
    const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  });
  
    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem('theme', theme);
      }, [theme])


      const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
      };

  return (
    <section>
      <div > 
      {/* <div className='fixed z-50 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 '>  */}
        { theme_options?.map((th_opt) => (
          <button 
            key = {th_opt.text}
            onClick={()=> handleThemeChange(th_opt.text)}
            className={`w-8 h-8 leading-9 rounded-full text-xl m-1 
            ${theme === th_opt.text ?  'text-sky-600' : 'text-black-500 dark:text-white'}`}
           >
            <ion-icon name={th_opt.icon}></ion-icon>
          </button> 
        ))}
      </div>
    </section>
  )
}

export default ThemeMode
