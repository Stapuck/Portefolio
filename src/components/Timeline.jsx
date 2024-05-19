import React from 'react'
import {sport_fr, experiences_fr} from '../constants' 
import {sport_en, experiences_en} from '../constants/index-en.js' 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = ({type}) => {
  const lgSite = document.documentElement.lang;
  if (type !== "sport" && type !== "experiences") {
    return <div>Invalid type</div>;
  }

  let data;
  if (type === 'sport' && lgSite === 'en') {
    data = sport_en;
  } else if (type === 'experiences' && lgSite === 'en') {
    data = experiences_en;
  } else if (type === 'sport' && lgSite === 'fr') {
    data = sport_fr;
  } else {
    data = experiences_fr;
  }


  return (
  <div className="mt-12 flex ">
    <VerticalTimeline >
      {data.map((sp)=> (
        <VerticalTimelineElement
        key={sp.company_name}
        date={sp.date}
        className='mx-2  text-slate-600 dark:text-slate-100 '
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
          <div >
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