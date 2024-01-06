import React from 'react'
import Slider from '../components/Slider'
import Gallery from '../components/Gallery'
import Video from '../components/Video'
import Gallery2 from '../components/Gallery2'
import Gallery3 from '../components/Gallery3'

const Extras = () => {
  return (

    <section className=' max-container '> 

    <div className='m-4'>
      <Video/>
    </div>
    <div className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <Slider/> 
    </div>

    <div className='m-4'>
      <Gallery/>    
    </div>

    <hr className='border-2 border-black'/>

    <div className='p-5'>
      <Gallery2/>    
    </div>
    <hr className='border-2 border-black'/>
    <div className='p-5'>
      <Gallery3/>    
    </div>
    




    </section>



  )
}

export default Extras