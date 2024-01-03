import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from "react-i18next"

const CTA = () => {

  const { t } = useTranslation()

  return (
    
    <section className='cta'>
        <p className="cta-text dark:text-white">{t('CTA.CTA1')} <br className='sm:block hidden' />
        {t('CTA.CTA2')}</p>
        <Link to="/contact" className='btn'>
          {t('Navlink.contact')}    
        </Link> 
    </section>
  )
}

export default CTA