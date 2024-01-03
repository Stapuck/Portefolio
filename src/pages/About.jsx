import React, { useEffect } from 'react'
import { skills} from '../constants'
import CTA from '../components/CTA';




const About = () => {
  useEffect(() => {
    document.title = 'About me'
  },[]);


  return (
    <section className="max-container">
      

      

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>

      <CTA/>
    </section>
  )
}

export default About