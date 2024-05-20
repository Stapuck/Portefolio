import React from 'react'
import {useEffect, useState} from 'react'
import { next_date } from '../constants/index-global';
import { useTranslation } from "react-i18next";



const Countdown = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [countDate, setCountDate] = useState(null);
  const [isNow, setIsNow] = useState(false);
  const { t } = useTranslation();
  const lg = document.documentElement.lang;
  

  useEffect(() => {
    const now = new Date().getTime();
    let closestDate = null;
    let closestTimeDiff = Infinity;

    next_date.forEach(event => {
      const eventDate = new Date(event.date).getTime();
      if (eventDate > now && eventDate - now < closestTimeDiff) {
        closestDate = event;
        closestTimeDiff = eventDate - now;
      }
    });
    setNextEvent(closestDate);
    if (closestDate) {
      setCountDate(new Date(closestDate.date).getTime());
    }
  }, []);

  const fct_countdown = () => {
    if (countDate) {
      const now = new Date().getTime();
      const gap = countDate - now;
      

      if (gap <= 0) {
        setIsNow(true);
        return; 
      }

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute)/ second);

      // chiffre

      const dayElement = document.getElementById("day");
      const hourElement = document.getElementById("hour");
      const minuteElement = document.getElementById("minute");
      const secondElement = document.getElementById("second");

      dayElement.innerText = textDay.toString();
      hourElement.innerText = textHour.toString();
      minuteElement.innerText = textMinute.toString();
      secondElement.innerText = textSecond.toString();  

      // texte 

      const dayLabelElement = document.getElementById("daylabel");
      const hourLabelElement = document.getElementById("hourlabel");
      const minuteLabelElement = document.getElementById("minutelabel");
      const secondLabelElement = document.getElementById("secondlabel");

      let dayLabel, hourLabel, minuteLabel, secondLabel;

      dayLabel = textDay !== 0 ? t('Countdown.days'): t('Countdown.day');
      hourLabel = textHour !== 0  ? t('Countdown.hours'): t('Countdown.hour');
      minuteLabel = textMinute !== 0  ? t('Countdown.minutes'): t('Countdown.minute');
      secondLabel = textSecond !== 0  ? t('Countdown.seconds'): t('Countdown.dsecond');

      dayLabelElement.innerText = dayLabel;
      hourLabelElement.innerText = hourLabel;
      minuteLabelElement.innerText = minuteLabel;
      secondLabelElement.innerText = secondLabel;

    }
  }

 

  useEffect(() => {
    const interval = setInterval(fct_countdown, 1000);
    if (isNow) {
      clearInterval(interval); 
      setTimeout(() => {
        setIsNow(false); 
        setCountDate(null); 
        window.location.reload(); 
      }, 20000);  // 43 200 000 (ms) pour 12h 
    }
    return () => clearInterval(interval);
  }, [countDate, isNow]);
 

  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">{t('Countdown.title')}</h1>
        {nextEvent ? (
          <div className="flex flex-col items-center">
            <div>
              <span className="font-bold dark:text-white">{t('Countdown.location')}</span>
              <span className='dark:text-slate-300'>{lg === "en" ? nextEvent.lieu_en : nextEvent.lieu_fr }</span>
            
             
            </div>
            <div>
              <span className="font-bold dark:text-white">{t('Countdown.event')}</span>
              <span className='dark:text-slate-300'>{lg === "en" ? nextEvent.event_en : nextEvent.event_fr }</span>
            </div>
            <div>
              {isNow ? (
                <div>
                  {/* revoir comment bien disposer les infos // mettre ce qu'il y a en bas ici aussi 
                  dark:text-white */}
                  <p>{t('Countdown.now')}</p>
                  <div className='dark:text-white'>
                    retrouver moi 
                    {lg === "en" ? nextEvent.event_en : nextEvent.event_fr }, {lg === "en" ? nextEvent.lieu_en : nextEvent.lieu_fr }, {nextEvent.live_result}, {nextEvent.live_video},
                    {nextEvent.bibs} à {nextEvent.start}
                  </div>
                </div>
              ) : (
                <span className='flex flex-col'>
                  <div className='flex flex-row mb-5'> 
                    <div className="flex flex-col items-center mx-4">
                      <span id="day" className="text-4xl font-bold dark:text-white"></span>
                      {/* <span id='daylabel' className="text-sm dark:text-white">{t('Countdown.day')}</span> */}
                      <span id='daylabel' className="text-sm dark:text-white"></span>
                    </div>
                    <div className="flex flex-col items-center mx-4">
                      <span id="hour" className="text-4xl font-bold dark:text-white"></span>
                      {/* <span id='hourlabel' className="text-sm dark:text-white">{t('Countdown.hour')}</span> */}
                      <span id='hourlabel' className="text-sm dark:text-white"></span>
                    </div>
                    <div className="flex flex-col items-center mx-4">
                      <span id="minute" className="text-4xl font-bold dark:text-white"></span>
                      {/* <span id='minutelabel' className="text-sm dark:text-white">{t('Countdown.minute')}</span> */}
                      <span id='minutelabel' className="text-sm dark:text-white"></span>
                    </div>
                    <div className="flex flex-col items-center mx-4">
                      <span id="second" className="text-4xl font-bold dark:text-white"></span>
                      {/* <span id='secondlabel' className="text-sm dark:text-white">{t('Countdown.second')}</span> */}
                      <span id='secondlabel' className="text-sm dark:text-white"></span>
                    </div>
                  </div>


{/* revoir tout ça et mettre la meme chose pour le c'est maintenant.   */}
                  {/* <div className='flex flex-row mb-5'> 
                    <div className="flex flex-col items-center mx-4">
                      <span  className="text-4xl font-bold dark:text-white">18</span>
                      <span  className="text-3xl font-bold dark:text-white"> bibs number</span>
                    </div>

                    <div className="flex flex-col items-center mx-4">
                      <span  className="text-4xl font-bold dark:text-white">12h20</span>
                      <span  className="text-3xl font-bold dark:text-white"> Run at</span>
                    </div>
                  </div> */}


                  {/* <div id='info' className='flex flex-col'>
                    <div>
                      <a target='_blank' href={nextEvent.live_result} > {t('Countdown.liveresulttxt')}</a>
                    </div>
                    <div> 
                    <a target='_blank' href={nextEvent.live_video} >{t('Countdown.livevideotxt')}</a>
                    </div>
                  </div> */}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className='dark:text-white'>
            <p>{t('Countdown.noevent')}</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default Countdown