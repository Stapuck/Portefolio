import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

import { useTranslation } from "react-i18next"
import SocialMContact from '../components/SocialMContact';

  

const Contact = () => {

  const { t } = useTranslation()

  // const formRef = useRef(null);
  const [form, setform] = useState({name:'', email:'', message:''});
  const [isLoading, setisLoading] = useState(false);
  const [type, setType] = useState('sponsor')

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    setisLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Terence",
        from_email: form.email,
        to_email: 'terence@saramandif.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      showAlert({show: true, text: 'Message sent successfully!', type:'success'})
      setTimeout(() => {
        hideAlert()
        setform({name:'', email:'', message:''});
      }, [3000])
    

    }).catch((error) => {
      setisLoading(false);
      console.log(error);
      showAlert({show: true, text: 'I didn\'t receive your message!', type:'danger'})
    })
  };

  const handleType = (e) => {
    setType(e.target.value)
  }



  useEffect(() => {
    document.title = 'Contact'
  },[]);

  return (
    // TODO: ici pour la gestion des elements sur la page 
    // <section className='relative flex lg:flex-row  max-container h-[100vh]'>
    <section className='relative flex flex-col  max-container h-full'>
    {/* <section className='relative flex flex-col  max-container h-[100vh]'> */}

      {alert.show && <Alert {...alert}/>}


      <div>
        <label htmlFor="Sponsor">Sponsor</label>
        <input  className="w-6 h-6" type="radio"  name= "sponsor" value= "sponsor" onChange={handleType} checked={type === 'sponsor'}/>

        <label htmlFor="Entreprise">Entreprise</label>
        <input  className="w-6 h-6" type="radio"  name= "entreprise" value= "entreprise" onChange={handleType} checked={type === 'entreprise'}/>
      
        {type === 'sponsor'? <div> je suis un sponsor</div > : <div> je suis une entreprise</div >} 
      </div>
      
     

      <SocialMContact/>


      {/* <div className='fex-1 min-w-[50%] flex flex-col'> */}
      <div className='fex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text dark:text-slate-200'>
          {t('Contact.in_touch')}
        </h1>
        <p>sponsor ou professionnel vous pouvez me contacter si dessous </p>
        <p>non serieux s'abstenir</p>

      </div>

      <form 
      className="w-full flex flex-col gap-7 mt-14"
      onSubmit={handleSubmit}
      >
        <label className="text-black-500 font-semibold dark:text-slate-200">
        {t('Contact.name')}
          <input 
            type="text"
            name='name' 
            className='input' 
            placeholder='John' 
            required
            value={form.name}
            onChange={handleChange}
            />
        </label>

        <label className="text-black-500 font-semibold dark:text-slate-200">
        {t('Contact.email')}
          <input 
            type="email"
            name='email' 
            className='input' 
            placeholder='John@gmail.com' 
            required
            value={form.email}
            onChange={handleChange}
            />
        </label>

        <label className="text-black-500 font-semibold dark:text-slate-200">
        {t('Contact.message')}
          <textarea 
            name='message' 
            rows={4}
            className='textarea' 
            placeholder='Let me know how can I help you' 
            required
            value={form.message}
            onChange={handleChange}
            />
        </label>

        <button 
          type='submit'
          className='btn dark:text-black'
          disabled ={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      
    </section>
  )
}

export default Contact


