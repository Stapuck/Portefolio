import React from 'react'
// import { skills, experiences} from '../constants'
// import timelince vertical copy/paste

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'> Terence</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
        </p>
      </div>  


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
      

      

      {/* <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <p> {skill.name} and {skill.type}</p>
           {/* <img 
             src={skill.imageUrl} 
             alt={skill.name} 
             className='w-1/2 h-1/2 object-contain'
             /> 
          </div>
         </div>

        ))}
        </div> */}
      </div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          Work Experience
        </h3>      
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
          </p>
        </div>  
        {/* <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience)=> (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div>
                  <img src={experience.icon} 
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain' />
                </div>}
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
        </div> */}

      </div>
    </section>
  )
}

export default About