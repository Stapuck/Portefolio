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
           

            <div>
                 {click && content}
            </div>
            <button className='block sm:hidden transition' onClick={handleClick}>
                {click ?  <FaTimes/>: <CiMenuFries/>}
            </button>
        </nav>  
    </header>
  )
}

export default Navbar


        {/* TODO: faire méga menu Material tailwind ?  */}


{/* //         <nav className="flex text-lg gap-7 font-medium "> */}
{/* <NavLink spy="true" smooth="true" */}
{/* //             to='/about'
//             className={({isActive}) => isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}
//             >
//                 {t('Navlink.about')}
//             </NavLink> *

//             <NavLink spy="true" smooth="true" to='/school' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                School
//             </NavLink>
//             <NavLink to='/sport' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                Sport
//             </NavLink>
//             <NavLink spy="true" smooth="true" to='/projects' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                 {t('Navlink.project')}
//             </NavLink>
//             <NavLink spy="true" smooth="true" to='/extras' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                 {t('Navlink.extra')}
//             </NavLink>
//             <NavLink spy="true" smooth="true" to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                 {t('Navlink.contact')}
//             </NavLink>
//             <NavLink spy="true" smooth="true" to='/video' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black border-b-2 border-transparent hover:border-black transition-all ease-in'}>
//                 video test
//             </NavLink>


//             <div>
//                 {click && content}
//             </div>
//             <button className='block sm:hidden transition' onClick={handleClick}>
//                 {click ?  <FaTimes/>: <CiMenuFries/>}

                
//             </button>

// </nav>



{/* <nav
            className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-slate-400 border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between text-blue-gray-900">
                <a href="#"
                class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                Material Tailwind
                </a>
                <div className="hidden lg:block">
                <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" class="flex items-center transition-colors hover:text-blue-500">
                        Pages
                    </a>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" class="flex items-center transition-colors hover:text-blue-500">
                        Account
                    </a>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" class="flex items-center transition-colors hover:text-blue-500">
                        Blocks
                    </a>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    <a href="#" class="flex items-center transition-colors hover:text-blue-500">
                        Docs
                    </a>
                    </li>
                </ul>
                </div>
                <button
                className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </span>
                </button>
            </div> */}