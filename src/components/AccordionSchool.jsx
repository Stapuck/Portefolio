import React, { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

const AccordionSchool = ({title, answer}) => {
    const [accordionOpen, setaccordionOpen] = useState(false)

    // const Accordion = () => {

    // }

    // const [open, setOpen] = React.useState(1);
 
    //   const handleOpen = (value) => setOpen(open === value ? 0 : value);

    

  return (
    <div className='py-2 '>
        <button onClick={() =>setaccordionOpen(!accordionOpen)} className='flex justify-between w-full '>
            <span>{title}</span>
            {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
            <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                    }`}
                />
                <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                    }`}
                />
            </svg>
            
        </button>
        <div className={`grid overflow-hidden transition-all ease-in-out text-slate-600 ${
            accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0] opacity-0' 
        }`}>
            <div className='overflow-hidden'>
                {answer}
            </div>
        </div>
    </div>
  )
}

export default AccordionSchool



 

 

   
