import React, { useState } from 'react'
import {RxDotFilled} from 'react-icons/rx'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const Slider = () => {

    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex ===0;
        const newindex = isFirstSlide ? slides.length - 1 : currentIndex - 1; 
        setCurrentIndex(newindex);
    }


    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newindex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newindex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (

    // className='max-w-[1400px] h-full w-full m-auto py-16 px-4 relative group'
    <section className='max-w-[1400px] h-full w-full m-auto py-16 px-4 relative group' >
      <div style={{background: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover"></div>

      <div 
        className=' hidden group-hover:block absolute top-[50%] -translate-x-0 trnaslate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer '
        onClick={prevSlide}>
        <BsChevronCompactLeft/>
      </div>
      <div 
        className=' hidden group-hover:block absolute top-[50%] -translate-x-0 trnaslate-y-[-50%] right-5 text-2xl p-2 bg-black/20  text-white cursor-pointer '
        onClick={nextSlide}>
        <BsChevronCompactRight/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div 
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'>
                <RxDotFilled/>
            </div>
        ))}

      </div>

    </section> 
  )
}

export default Slider