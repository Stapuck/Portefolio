import React from 'react'
import { useTranslation } from "react-i18next"


const Footer = () => {

  const { t } = useTranslation()
  
  const releaseDate = new Date('2023-12-31')
  const timedifference = new Date() - releaseDate
  const number_of_days = Math.floor(timedifference / (1000*60*60*24))


  const num_version =import.meta.env.VITE_APP_VERSION;
  const date_version =import.meta.env.VITE_APP_VERSION_DATE;
  const owner = import.meta.env.VITE_APP_OWNER;


  return (

    <section>
       <div>Footer</div>
       <div>made by <span> {owner} </span></div>
       <div>version numéro {num_version}, {date_version}</div>
       <div>
        {t('test_value', {number_of_days})}
       </div>
    </section>

   
  )
}

export default Footer