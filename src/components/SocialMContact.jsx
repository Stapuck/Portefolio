import { t } from 'i18next'
import React from 'react'

const SocialMContact = () => {
// todo responsive 
    const social = [
        {
            name : "Instagram",
            href : "https://www.instagram.com/terence__srmndf/",
            icone : "logo-instagram",
        },
        {
            name : "Github",
            href : "https://github.com/Stapuck",
            icone : "logo-github",
        },
        {
            name : "Linkedin",
            href : "https://www.linkedin.com/in/terence-saramandif-840a331a8/",
            icone : "logo-linkedin",
        },
        {
            name : "Facebook",
            href : "https://www.facebook.com/TSaramandif/posts/pfbid02xJVEZhzVZXvdabmq5j48wzojLs7ebaQ9VgSGn6Stb9yLbuwYDof6vxYW13SySJTYl?comment_id=626261255315309&notif_id=1658941091445290&notif_t=feed_comment&ref=notif",
            icone : "logo-facebook",
        },
    ]
  return (
    <div className='m-2 mt-5'>
        <h2 className='mb-5 dark:text-slate-300'>{t('Contact.socialmedia')}</h2>
        <div className='dark:text-white flex flex-col justify-around text-lg  md:text-4xl md:flex-row '>
            {social.map((so, index) => (
                <div>
                    <div key={index} className=' hidden text-black font-semibold text-sm absolute mt-24 bg-slate-600 px-3 rounded-2xl group-hover:block'>
                        {so.name}
                    </div>
                    <div  className="hover:scale-150  group">
                        <a  href={so.href} target='_blank' >
                            < ion-icon name={so.icone}></ion-icon>
                        </a>
                    </div>
                </div>
            ))}
        </div>        
    </div>
  )
}

export default SocialMContact