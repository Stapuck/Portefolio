import React from 'react'
import Competition from '../components/Competition'
import Timeline from '../components/Timeline'



const Sport = () => {




  return (
    <section className="max-container">
      <div>Sport</div>

      <Competition />

      <hr className='dark:border-slate-100 border-slate-700 mt-5'/>

              <Timeline type="sport"/>

    </section>
  
  )
}

export default Sport