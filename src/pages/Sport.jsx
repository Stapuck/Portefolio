import React from 'react';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';



import videoBg2 from '../assets/video/20240203_Reunion.mp4';

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";


const Sport = () => {
  const [btnscroll, setbtnscroll] = useState(true);
  const [soundstate, setsoundstate] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    document.title = 'Sport'
  },[]);

  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
    if(window.scrollY < 100) {
      setbtnscroll(true)
      }else {
        setbtnscroll(false)
        //todo 1 gestion de la music avis ?
        // if (videoRef.current && !soundstate) {
        //   videoRef.current.muted = true;
        //   setsoundstate(true);
        // }
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
          top : 1220,  // todo revoir, pour scroll à la fin de la video 
          behavior: 'smooth'
      })
    }

    //todo 1 gestion de la music avis ? sans = au dessus et avec = en dessus 
    // const scrolldown = () => {
    //   if (videoRef.current && !soundstate) {
    //     videoRef.current.muted = true;
    //     setsoundstate(true);
    //   }
    //   window.scrollTo({
    //     top: 1220,
    //     behavior: 'smooth',
    //   });
    // };

    const ChangeSoundState = () => {
      if (videoRef.current) {
        videoRef.current.muted = !soundstate;
        setsoundstate(!soundstate);
      }
    };

    // const ChangeSoundState = () => { 
    //     var video = document.getElementById('videoBG');
    //     setsoundstate(!soundstate);
    //     video.muted = !soundstate;
    // }

  return (
    <section>
      <div className='videobg mb-28'> 
        <div className='overlay'></div>
        <video id="videoBG" ref={videoRef} src={videoBg2} autoPlay loop muted/>
        <div className="content "> {/*flex justify-center sm:flex-row flex-col */}
            <h1 className='text-7xl font-bold'><span className='blue-gradient_text font-semibold drop-shadow '> Terence</span> SARAMANDIF</h1>
            <p className='text-3xl font-semibold'>{t('Sport.videotext')} </p>
        </div> 
      </div>

      <div className='max-container'>
        <div className='flex flex-col items-center gap-10'>
          <h1 className='text-5xl font-bold dark:text-white'>{t('Sport.title')}</h1> 

          <Link to="/">test</Link>
          <p className='text-xl font-semibold dark:text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.</p>
          <Timeline type="sport"/>
          {/* ici */}
        </div>

        <div>
        <p>

{/*  todo  */}
        mettre lien comme dans projet pour : 
        - prochaine courses  -{'>'} vers countdown.
        - voir plus d'information -{'>'} google doc pressbook read-only ( et plus tard faire un site web à la place du pressbook).
        - mettre le lien suivant  avec un truc du style for all result : 
      
      {/* https://www.canoeicf.com/athlete/terence-saramandif/results */}

        - cette timeline ne comprend pas les Coupe du monde et compétitions plus mineurs ( National, ICF ranking,...)
        ou cette timeline ne comprend que les evenements important ( moment cles, bon résultat lors de ma carriere)
        </p>
      </div>

      </div>

     


        



      <div className='fixed bottom-16 right-[50%] text-6xl text-white  hover:bg-transparent/35 rounded-full flex items-center align-middle'>
        {btnscroll && 
          <div
          onClick={scrolldown}
          >
          <ion-icon className="mx-4" name="chevron-down-outline"></ion-icon>                    
          </div>}
      </div>

      {btnscroll && 
        <div className='group fixed bottom-16  left-[93%] text-white hover:text-slate-800' >
          <button className='text-4xl'>
            <ion-icon name="information-circle-outline"></ion-icon>
          </button>
          <div className='hidden fixed bottom-12 left-[92%] text-slate-200 group-hover:block'> 
            <span>by </span> <a target='_blank' href="https://www.instagram.com/romain.bruneau/"> R.B </a>
          </div>
        </div>
      } 
       
      {btnscroll && !soundstate  && 
        <div  className='text-4xl fixed bottom-16  right-[95%] text-white hover:text-slate-800'>
          <button  onClick={ChangeSoundState}>
              <ion-icon name="volume-high-outline"></ion-icon>
          </button>
        </div>
      } 

      {btnscroll &&  soundstate && 
        <div  className='text-4xl fixed bottom-16  right-[95%] text-white hover:text-slate-800'>
          <button  onClick={ChangeSoundState}>
              <ion-icon name="volume-mute-outline"></ion-icon>
          </button>
        </div>
      }



    </section>
  )
}

export default Sport