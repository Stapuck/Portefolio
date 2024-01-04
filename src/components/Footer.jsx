import React from 'react'
import { useTranslation } from "react-i18next"


const Footer = () => {

  const { t } = useTranslation()
  
  const releaseDate = new Date('2024-06-20')
  const buldingDate = new Date('2023-12-31')

  const buildingtoToday = new Date() - buldingDate
  const number_of_days_building = Math.floor(buildingtoToday / (1000*60*60*24))

  const releasetoToday = new Date() - releaseDate
  const number_of_days_release = Math.floor(releasetoToday / (1000*60*60*24))


  const num_version =import.meta.env.VITE_APP_VERSION;
  const date_version =import.meta.env.VITE_APP_VERSION_DATE;
  const owner = import.meta.env.VITE_APP_OWNER;


  return (

    <footer className='w-full footer'>
       
       <hr className='bg-white'/>
        <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div>Made by <span> {owner} </span></div>
          <div>version numéro {num_version}, {date_version}</div>
          <div>{ t('test_value', {number_of_days_building})}</div>
          <div>{ t('test_value2', {number_of_days_release})}</div>          
        </section>


       
    </footer>

   
  )
}

export default Footer