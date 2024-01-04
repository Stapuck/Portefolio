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
        console.log(window.scrollY.valueOf())

    }


  return (
        <div className='fixed bottom-24 right-28 '>
            {BacktoTopBtn && (
            <button 
            onClick={scrollUp}
            className=''
            >
                ^
                {/* mettre une icone */}
            </button>)}
        </div>
  )
}

export default BacktoTopBtn