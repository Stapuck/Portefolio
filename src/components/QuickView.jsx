import React from 'react'

const QuickView = () => {
  return (
    <section className='border-2 border-black p-3 m-4 rounded-xl bg-pink-400/50'>
        <h1 className='text-2xl flex justify-center items-center m-2 '>Quick View </h1>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='border-2 border-black bg-green-400 rounded-xl flex flex-col items-center'>
            <div>
              PressBook 
            </div>
             <div className='w-full border-t-2 border-black flex justify-center'>btn</div>
          </div>
          <div className='border-2 border-black bg-blue-400 rounded-xl flex flex-col items-center'>
            <div>
              CV
            </div>
            <div className='w-full border-t-2 border-black flex justify-center'>btn</div>
          </div>
          <div className='border-2 border-black bg-orange-400 rounded-xl flex flex-col items-center'>
            <div> ?? </div>
            <div className='w-full border-t-2 border-black flex justify-center'>btn</div>
          </div>
        </div>
      </section>
  )
}

export default QuickView