import React from 'react'
import {useEffect, useState} from 'react'
import { next_date } from '../constants/index';


const Countdown = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [countDate, setCountDate] = useState(null);
  const [isNow, setIsNow] = useState(false);



  

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

      const dayLabel = textDay !== 0 ? "Days" : "Day";
      const hourLabel = textHour !== 0  ? "Hours" : "Hour";
      const minuteLabel = textMinute !== 0  ? "Minutes" : "Minute";
      const secondLabel = textSecond !== 0  ? "Secondes" : "Seconde";


      const dayElement = document.getElementById("day");
      const hourElement = document.getElementById("hour");
      const minuteElement = document.getElementById("minute");
      const secondElement = document.getElementById("second");

      dayElement.innerText = textDay.toString();
      hourElement.innerText = textHour.toString();
      minuteElement.innerText = textMinute.toString();
      secondElement.innerText = textSecond.toString();  


      const dayLabelElement = document.getElementById("daylabel");
      const hourLabelElement = document.getElementById("hourlabel");
      const minuteLabelElement = document.getElementById("minutelabel");
      const secondLabelElement = document.getElementById("secondlabel");

      
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
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Next Event</h1>
        {nextEvent ? (
          <div className="flex flex-col items-center">
            <div>
              <span className="font-bold dark:text-white">Location: </span>
              <span className='dark:text-slate-300'>{nextEvent.lieu}</span>
              {/*todo rajouter l'addresse et le mettre en lien blank= */}
            </div>
            <div>
              <span className="font-bold dark:text-white">Event: </span>
              <span className='dark:text-slate-300'>{nextEvent.event}</span>
            </div>
            <div>
              {isNow ? (
                <div>
                  {/* revoir comment bien disposer les infos 
                  dark:text-white */}
                  <p>C'est maintenant</p>
                  <div className='dark:text-white'>
                    retrouver moi 
                    {nextEvent.event}, {nextEvent.lieu}, {nextEvent.live_result}, {nextEvent.live_video},
                    {nextEvent.bibs} à {nextEvent.start}
                  </div>
                
                </div>
              
              ) : (
                <span className='flex flex-row'>
                  <div className="flex flex-col items-center mx-4">
                    <span id="day" className="text-4xl font-bold dark:text-white"></span>
                    <span id='daylabel' className="text-sm dark:text-white"></span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="hour" className="text-4xl font-bold dark:text-white"></span>
                    <span id='hourlabel' className="text-sm dark:text-white"></span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="minute" className="text-4xl font-bold dark:text-white"></span>
                    <span id='minutelabel' className="text-sm dark:text-white"></span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="second" className="text-4xl font-bold dark:text-white"></span>
                    <span id='secondlabel' className="text-sm dark:text-white"></span>
                  </div>
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className='dark:text-white'>
            <p>Pas d'autre événement pour le moment, mais ça va vite revenir</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Countdown