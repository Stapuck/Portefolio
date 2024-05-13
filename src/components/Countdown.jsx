import React from 'react'
import {useEffect, useState} from 'react'
import { next_date } from '../constants/index';


// trouver comment faire passer la date en argument du composant et changer l'argument automatiquement ;) 

// + projet de mettre le live video ou result en dessous si countdown < à 1j.

const Countdown = () => {


  // remettre à jours automatiquement entre 2 evenement 

  const [nextEvent, setNextEvent] = useState(null);
  const [countDate, setCountDate] = useState(null);
  const [isNow, setIsNow] = useState(false);

  useEffect(() => {
    // Trouver la date la plus proche dans le futur
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

    // Mettre à jour l'état avec les détails du prochain événement
    setNextEvent(closestDate);
    if (closestDate) {
      setCountDate(new Date(closestDate.date).getTime());
    }

  }, []);

  // const [nextEvent, setNextEvent] = useState(null);

  // useEffect(() => {
  //   // Trouver la date la plus proche dans le futur
  //   const now = new Date().getTime();
  //   let closestDate = null;
  //   let closestTimeDiff = Infinity;

  //   next_date.forEach(event => {
  //     const eventDate = new Date(event.date).getTime();
  //     if (eventDate > now && eventDate - now < closestTimeDiff) {
  //       closestDate = event;
  //       closestTimeDiff = eventDate - now;
  //     }
  //   });

  //   // Mettre à jour l'état avec les détails du prochain événement
  //   setNextEvent(closestDate);

  //   // const countdate = closestDate.date;

  // }, []);


  const fct_countdown = () => {
    // const countDate = new Date("May 23, 2024 15:32").getTime();
    if (countDate) {
      const now = new Date().getTime();
      const gap = countDate - now;

      if (gap <= 0) {
        setIsNow(true);
        return; // Arrêter le compte à rebours si l'événement est maintenant
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
      clearInterval(interval); // Arrêter le compte à rebours si l'événement est maintenant
      setTimeout(() => {
        setIsNow(false); // Réinitialiser pour le prochain événement
        setCountDate(null); // Réinitialiser la date pour trouver le prochain événement
        window.location.reload(); // Rafraîchir la page après une minute
      }, 20000); // Attendre une minute avant de réinitialiser
    }
    return () => clearInterval(interval);
  }, [countDate, isNow]);
  // setInterval(fct_countdown,1000);

  return (
    <section>


{/* <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Next Event</h1>
      {nextEvent && (
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
            <span className="font-bold">Countdown: </span>
            <span id="countdown"></span>
          </div>
        </div>
      )}
    </div> */}



      {/* <div className="text-center">
      {/* <h1 className="text-4xl font-bold mb-4">Countdown</h1> 
      <div className="flex justify-center">

      {isNow ? (
              <div id="isnow">C'est maintenant</div>
            ) : (
              <span>
                <span id="day"></span> Days{' '}
                <span id="hour"></span> Hours{' '}
                <span id="minute"></span> Minutes{' '}
                <span id="second"></span> Seconds
              </span>
            )} */}
        {/* <div className="flex flex-col items-center mx-4">
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
          <span className="text-sm">Seconds</span>
        </div> 
      </div>
    </div>*/}

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
            <span className="font-bold">Countdown: </span>
            {isNow ? (
              <div id="isnow">C'est maintenant</div>
            ) : (
              <span>
                <span id="day"></span> Days{' '}
                <span id="hour"></span> Hours{' '}
                <span id="minute"></span> Minutes{' '}
                <span id="second"></span> Seconds
              </span>
            )}
          </div>
        </div>
      ) : (
        <div>Pas d'événement à suivre</div>
      )}
    </div>


    </section>
  )
}

export default Countdown