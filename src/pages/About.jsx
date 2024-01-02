import React, { useEffect } from 'react'
import { skills} from '../constants'
import CTA from '../components/CTA';

import SchoolTimeline from '../components/SchoolTimeline';





const About = () => {
  useEffect(() => {
    document.title = 'About me'
  },[]);



  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'> Terence</span> {/* <span className='green-gradient_text drop-shadow'>SARAMANDIF</span> */}
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
      

      

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
          <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
            <p> {skill.name}</p>
            <p>{skill.type}</p>
            {/* <img 
             src={skill.imageUrl} 
             alt={skill.name} 
             className='w-1/2 h-1/2 object-contain'
             />  */}
          </div>
         </div>
        ))}
        </div>
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

        <SchoolTimeline/>

      </div>

      <hr className='border-slate-100'/>

      <CTA/>
    </section>
  )
}

export default About