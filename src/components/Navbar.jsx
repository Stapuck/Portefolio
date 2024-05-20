import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

import { IoSettingsSharp } from "react-icons/io5";
import ThemeMode from './ThemeMode';
import LanguagesBtn from './LanguagesBtn';

import { useTranslation } from "react-i18next";

import { useState, useEffect } from 'react';


const Navbar = ({isVisible}) => {
    console.log(isVisible);
    const { t } = useTranslation()

    const [click, setClick] = useState(false);
    const [clicksetting, setClicksetting] = useState(false);

    const handleClick = () => setClick(!click);
    const handleClicksetting = () => setClicksetting(!clicksetting);

    // const [clickisvisble, setClickisvisble] = useState(false);

    // const handleClickisvisble = () => setClick(!clickisvisble);

    // pour le hamburger 
    const content = <>
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-300 dark:bg-slate-900 transition'>
        <ul className='text-center text-xl p-20'>
            <Link to='/about'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>About</li></Link>
            <Link to='/school'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>School</li></Link>
            <Link to='/sport'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>Sport</li></Link>
            <Link to='/projects'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>Projects</li></Link>
            <Link to='/extras'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>Bonus</li></Link>
            <Link to='/contact'><li className='my-4 py-4 border-b border-slate-800 dark:hover:bg-slate-800 hover:bg-slate-500 hover:rounded-xl text-black dark:text-white' onClick={handleClick}>Contact</li></Link>
        </ul>
        </div>
    </>
// spy="true" smooth="true"
//     // fixed shadow-md
//     // bg = #1d2235 

// todo revoir le hamburger. et son fonctionnement

// todo revoir pour le isvisble et la gestion de la navbar une fois que ça marche juste la mettre en fixed au coordonnée précise de en dessous de la vidéo. 
  return (
    <header className={` ${isVisible === false ? 'hidden fixed ' : ' fixed header'}`}>
    {/* //  <header className={`hidden`}>
    //<header className={`hidden fixed header ${isVisible }`}> */}
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transform hover:scale-110 transition-transform" >
             <p className="blue-gradient_text">TS</p>
        </NavLink>
        <nav className="hidden sm:flex text-lg gap-7 font-medium">
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
            

            
            {isVisible === true ? <div>true</div> : <div>false</div>}
            
        </nav>  
        
        <div>
            {click && content}
        </div>



        {/* <div>
            {clicksetting &&  
                <div className='fixed z-40 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 flex flex-col justify-center items-center border-2 border-slate-700 dark:border-slate-300'>
                    <ThemeMode className=''/> 
                    <LanguagesBtn className=''/>
                </div> 
            }      
        </div> */}

        {/* pour le hamburger  */}
        <button className='block sm:hidden transition' onClick={handleClick}>
             {click ?  <FaTimes/>: <GiHamburgerMenu/>} {/* todo revoir les boutons en eux meme   */}
        </button>

        {/* pour gestion langue et theme  */}

        {/* <button className='block  transition' onClick={handleClicksetting}>
                {clicksetting ?  <FaTimes/>: <IoSettingsSharp/>}
        </button> */}

        

        
    </header>
  )
}

export default Navbar


        {/* TODO: faire méga menu Material tailwind ? pour le responsif  */}