import React from 'react'
import {experiences} from '../constants'


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const SchoolTimeline = () => {
  return (
    <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience)=> (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                // icon={<div className='flex justify-center items-center w-full h-full'>
                //   <img src={experience.icon} 
                //   alt={experience.company_name}
                //   className='w-[60%] h-[60%] object-contain' />
                // </div>}
                // iconStyle={{ backgroung: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solide',
                  // borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black tect-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index)=> (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
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

export default SchoolTimeline