import React, { useState } from 'react'

const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr'
  
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    }
];

const DropDownLanguages = () => {
    const [isOpen, setIsOpen] = useState(false);
   

  return (
    <div className='relative flex flex-col items-center'>
       <button 
        className='bg-blue-400 p-4 w-full flex items-center rounded-2xl border-4 border-transparent active:text-white active:border-white tracking-wider'
        onClick={()=>setIsOpen((prev)=> !prev)}
    
        >
         DropDown
    
        </button>

        {isOpen && 
            <div className='bg-slate-400 px-5 pt-2'>
                {languages.map(({code, name, country_code}) => ( 
                    <li key={country_code}>
                        <button className='dropdown-item'>
                            {/* <span className={`flag-icon flag-icon-${country_code} mx-2`}></span> */}
                            {name}
                        </button>
                    </li>
                ))}
            
            </div>}

    </div>
  )
}

export default DropDownLanguages