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

      const dayElement = document.getElementById("day");
      const hourElement = document.getElementById("hour");
      const minuteElement = document.getElementById("minute");
      const secondElement = document.getElementById("second");

      dayElement.innerText = textDay.toString();
      hourElement.innerText = textHour.toString();
      minuteElement.innerText = textMinute.toString();
      secondElement.innerText = textSecond.toString();   
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
        <h1 className="text-4xl font-bold mb-4">Next Event</h1>
        {nextEvent ? (
          <div className="flex flex-col items-center">
            <div>
              <span className="font-bold">Location: </span>
              <span>{nextEvent.lieu}</span>
            </div>
            <div>
              <span className="font-bold">Event: </span>
              <span>{nextEvent.event}</span>
            </div>
            <div>
              {isNow ? (
                <div>
                  <p>C'est maintenant</p>
                  <div>
                    retrouver moi 
                    {nextEvent.event}, {nextEvent.lieu}, {nextEvent.live_result}, {nextEvent.live_video},
                    {nextEvent.bibs} à {nextEvent.start}
                  </div>
                
                </div>
              
              ) : (
                <span className='flex flex-row'>
                  <div className="flex flex-col items-center mx-4">
                    <span id="day" className="text-4xl font-bold"></span>
                    <span className="text-sm">Days</span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="hour" className="text-4xl font-bold"></span>
                    <span className="text-sm">Hours</span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="minute" className="text-4xl font-bold"></span>
                    <span className="text-sm">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center mx-4">
                    <span id="second" className="text-4xl font-bold"></span>
                    <span className="text-sm">Secondes</span>
                  </div>
                </span>
              )}
            </div>
          </div>
        ) : (
          <div>Pas d'autre événement pour le moment, mais ça va vite revenir</div>
        )}
      </div>
    </section>
  )
}

export default Countdown