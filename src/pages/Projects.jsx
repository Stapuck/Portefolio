import React, { useEffect } from 'react'
import {projects} from '../constants/index'
import {projectsen} from '../constants/index-en'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {

  const lgSite = document.documentElement.lang;


  useEffect(() => {
    document.title = 'Projects'
  },[]);

  // ici ? 
  let data;
  if (lgSite === 'fr') {
    data = projects;
  } else {
    data = projectsen;
  }


  return (
    <section className="max-container">
      <h1 className="head-text dark:text-white">
        My<span className='blue-gradient_text font-semibold drop-shadow'> Projects</span> 
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor dolor, convallis sit amet elit ut, lobortis pharetra nisl. Aliquam commodo, eros eu convallis placerat, neque diam varius nunc, at luctus lorem libero vitae nibh. Donec blandit aliquam eros sed varius. Etiam blandit tellus ut turpis tempor ultricies. Ut consequat leo aliquet erat elementum ullamcorper.
        </p>
      </div>  

      <div className='flex flex-wrap my-20 gap-16'>
        {data.map((project)=> (
          <div className='lg:w-[400px] w-full ' key={project.name}>
            <div className='block-container w-12 h-12 '>
              <div className={`btn-back rounded-xl  ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} 
                alt="Projet Icon" 
                className='w-1/2 h-1/2 object-contain'
                />
              </div> 
            </div>
              {/* todo : enlever shadow  ?? */}
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold dark:text-slate-200'>{project.name}</h4>
              <p className='mt-2 text-slate-600 dark:text-slate-300'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                to={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-blue-800 dark:text-blue-500 flex flex-row'
                >
                  Live Link
                  <div className='ml-2 text-xl' ><ion-icon name="arrow-forward-outline"></ion-icon></div>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 '/>

      <CTA/>
    </section>
  )
}

export default Projects