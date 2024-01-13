import React  from 'react'
import { useEffect, useState } from "react"

const BacktoTopBtn = () => {
    const [BacktoTopBtn, setBacktoTopBtn] = useState(false);

    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 1400) {
                setBacktoTopBtn(true)
            }else {
                setBacktoTopBtn(false)
            }
        })


    }, [])
    
    const scrollUp = () => {
        window.scrollTo({
            top : 0, 
            behavior: 'smooth'
        })

    }


  return (
        <div className='fixed bottom-12 right-14 text-4xl dark:text-white lg:bottom-24 lg:right-28 lg:text-7xl'>
            {BacktoTopBtn && (
            <button 
            onClick={scrollUp}
            >
                <ion-icon className="text-xl" name="arrow-up-circle-outline"></ion-icon>
            </button>)}
        </div>
  )
}

export default BacktoTopBtn