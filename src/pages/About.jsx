import React, { useEffect } from 'react'
import { skills} from '../constants'
import CTA from '../components/CTA';




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


      

      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>

      <CTA/>
    </section>
  )
}

export default About