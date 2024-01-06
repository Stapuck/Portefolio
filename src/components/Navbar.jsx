import React from 'react'
import { NavLink } from 'react-router-dom'

import { useTranslation } from "react-i18next"

const Navbar = () => {

    const { t } = useTranslation()


  return (
    // fixed shadow-md
    // bg = #1d2235 
    <header className=' header '>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transform hover:scale-110 transition-transform" >
            <p className="blue-gradient_text">TS</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium ">
            <NavLink
            to='/about'
            className={({isActive}) => isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}
            >
                {t('Navlink.about')}
            </NavLink>

            <NavLink to='/school' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
               School
            </NavLink>
            <NavLink to='/sport' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
               Sport
            </NavLink>
            <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
                {t('Navlink.project')}
            </NavLink>
            <NavLink to='/extras' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
                {t('Navlink.extra')}
            </NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
                {t('Navlink.contact')}
            </NavLink>
            <NavLink to='/video' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
                video test
            </NavLink>

        </nav>

        {/* TODO: faire méga menu Material tailwind ?  */}

        
    </header>
  )
}

export default Navbar