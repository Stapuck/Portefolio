import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {CiMenuFries} from 'react-icons/ci'


import { useTranslation } from "react-i18next"

const Navbar = () => {

    const { t } = useTranslation()

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const content = <>
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
       <ul className='text-center text-xl p-20'>
        <Link to='/about'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>About</li></Link>
        <Link to='/school'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>School</li></Link>
        <Link to='/sport'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>Sport</li></Link>
        <Link to='/projects'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>Projects</li></Link>
        <Link to='/extras'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>Bonus</li></Link>
        <Link to='/contact'><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-xl text-white' onClick={handleClick}>Contact</li></Link>
       </ul>
    </div>
    
    </>
// spy="true" smooth="true"

  return (
//     // fixed shadow-md
//     // bg = #1d2235 
    <header className='fixed header '>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transform hover:scale-110 transition-transform" >
             <p className="blue-gradient_text">TS</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium ">
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                {t('Navlink.about')}
            </NavLink> 
            <NavLink  to='/school' className={({isActive})=> isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                School
            </NavLink>
            <NavLink to='/sport'  className={({isActive})=> isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                Sport
            </NavLink>
            <NavLink to='/projects' className={({isActive})=> isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                {t('Navlink.project')}
            </NavLink>
            <NavLink to='/extras' className={({isActive})=> isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                {t('Navlink.extra')}
            </NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500 dark:text-blue-400' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in dark:text-slate-200 dark:hover:border-slate-200'}>
                {t('Navlink.contact')}
            </NavLink>
           

            {/* <div>
                 {click && content}
            </div>
            <button className='block sm:hidden transition' onClick={handleClick}>
                {click ?  <FaTimes/>: <CiMenuFries/>}
            </button> */}
        </nav>  
    </header>
  )
}

export default Navbar


        {/* TODO: faire méga menu Material tailwind ? pour le responsif  */}