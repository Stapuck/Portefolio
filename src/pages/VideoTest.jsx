import React from 'react'
import videoBg from '../assets/video/demo.mp4'
import { useEffect, useState } from "react"
import BacktoTopBtn from '../components/BacktoTopBtn';
import Timeline from '../components/Timeline';

const VideoTest = () => {
    const [btnscroll, setbtnscroll] = useState(true);
    

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if(window.scrollY < 120) {
                setbtnscroll(true)
            }else {
                setbtnscroll(false)
            }
        })

        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
        window.addEventListener('load', scrollToTop);

        return () => {
        window.removeEventListener('load', scrollToTop);
        };
    }, []);

    const scrolldown = () => {
        window.scrollTo({
            top : 1220, 
            behavior: 'smooth'
        })
        console.log(window.scrollY.valueOf())
        
    }


  return (
    <section >
        <div className='videobg mb-28'> 
            <div className='overlay'></div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content "> {/*flex justify-center sm:flex-row flex-col */}
                {/* <h1 className='text-6xl font-bold'>Welcome</h1>
                <p className='text-2xl font-semibold'>to my site</p> */}
                <h1 className='text-7xl font-bold'><span className='blue-gradient_text font-semibold drop-shadow '> Terence</span> SARAMANDIF</h1>
                <p className='text-3xl font-semibold'>Athlete | Engineer </p>
            </div>
        </div>
        <div className='max-container'>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-5xl font-bold '>test</h1> 
                <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.</p>

                <Timeline type="sport"/>
               
            </div>
            <div className='fixed bottom-16  right-[50%] text-7xl text-slate-500/75  hover:bg-transparent/35 rounded-full flex items-center align-middle'>
                {btnscroll && 
                    <div
                        onClick={scrolldown}
                    >
                        <ion-icon name="chevron-down-outline"></ion-icon>                    
                    </div>}
            </div>

        </div>
        
    </section>
  )
}

export default VideoTest