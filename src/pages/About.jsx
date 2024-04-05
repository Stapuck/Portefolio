import React, { useEffect } from 'react'
import { skills} from '../constants'
import CTA from '../components/CTA';
import Timeline from '../components/Timeline';



const About = () => {
  useEffect(() => {
    document.title = 'About me'
  },[]);


  return (
    <section className="max-container">

      <h1 className='head-text justify-center'>Un double project</h1>

      <div>
        <h2>Sportif</h2>
        <h2>Professionnel </h2>
      </div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
      
      <div className="mt-16 flex flex-wrap gap-12 mb-5">
        {skills.map((skill, index) => (
          <div key={index} className=' group block-container w-20 h-20 relative flex justify-center'>
            <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
              <img 
              src={skill.imageUrl} 
              alt={skill.name} 
              className='w-1/2 h-1/2 object-contain'
              /> 
            </div>
            <div className='hidden text-black font-semibold text-sm absolute mt-24 bg-slate-600 px-3 rounded-2xl group-hover:block'>
              {skill.name}
            </div>
          </div>
        ))}
        </div>
      </div>



      

      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>

       <CTA/>
    </section>
  )
}

export default About