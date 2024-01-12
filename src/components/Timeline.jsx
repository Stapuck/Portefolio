import React from 'react'



import {sport, experiences} from '../constants'
import {sporten, experiencesen} from '../constants/index copy'


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({type}) => {


  const lgSite = document.documentElement.lang;
  // const lg = lgSite === "fr" ? TABLE_HEAD_FR : TABLE_HAED_EN;

  // Vérifiez si type est bien défini et correspond à une valeur attendue
  if (type !== "sport" && type !== "experiences") {
    return <div>Invalid type</div>;
  }


  // const data = type === "sport" ? sport : experiences;

  let data;
  if (type === 'sport' && lgSite === 'en') {
    data = sporten;
  } else if (type === 'experiences' && lgSite === 'en') {
    data = experiencesen;
  } else if (type === 'sport' && lgSite === 'fr') {
    data = sport;
  } else {
    // Par défaut, utilisez le fichier en français pour les expériences
    data = experiences;
  }


  return (

  <div className="mt-12 flex">
    <VerticalTimeline>
      {data.map((sp)=> (
        <VerticalTimelineElement
        key={sp.company_name}
        date={sp.date}
        icon=
        {
          <div className='flex justify-center items-center w-full h-full '>
            <img 
            src={sp.icon} 
            alt={sp.company_name} 
            className='w-[60%] h-[60%] object-contain'
            />
          </div>
        } 
        iconStyle={{ background: sp.iconBg}}
        contentStyle={{
          borderBottom: '8px',
          borderStyle: 'solid',
          borderBottomColor: sp.iconBg,
          boxShadow: 'none'
        }}
        >
          <div>
            <h3 className='text-black tect-xl font-poppins font-semibold'>
              {sp.title}
            </h3>
            <p className='text-black-500 font-medium font-base' style={{margin:0}}>
              {sp.company_name}
            </p>
          </div>

          <ul className='my-5 list-disc ml-5 space-y-2'>
            {sp.points.map((point, index)=> (
              <li key={`sp-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                {point}
              </li>

            ))}
          </ul>

        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
  )
}

export default Timeline