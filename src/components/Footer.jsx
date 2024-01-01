import React from 'react'

const Footer = () => {

  const num_version =import.meta.env.VITE_APP_VERSION;
  const date_version =import.meta.env.VITE_APP_VERSION_DATE;
  const owner = import.meta.env.VITE_APP_OWNER;


  return (

    <section>
       <div>Footer</div>
       <div>made by <span> {owner} </span></div>
       <div>version numéro {num_version}, {date_version}</div>
    </section>

   
  )
}

export default Footer