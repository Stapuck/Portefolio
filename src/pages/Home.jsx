import React, { useEffect } from 'react'

const Home = () => {

  

  useEffect(() => {
    document.title = 'TS | Home'
  },[]);

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        PopUP
      </div> */}


    </section>
  )
}

export default Home