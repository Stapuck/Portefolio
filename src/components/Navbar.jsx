import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next"

const Navbar = () => {

    const { t } = useTranslation()


  return (
    // fixed shadow-md
    // bg = #1d2235
    <header className=' header '>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" >
            <p className="blue-gradient_text">TS</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
               {t('Navlink.about')}
            </NavLink>
            <NavLink to='/school' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
               School
            </NavLink>
            <NavLink to='/sport' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
               Sport
            </NavLink>
            <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                {t('Navlink.project')}
            </NavLink>
            <NavLink to='/extras' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                {t('Navlink.extra')}
            </NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>
                {t('Navlink.contact')}
            </NavLink>

        </nav>

        
    </header>
  )
}

export default Navbar