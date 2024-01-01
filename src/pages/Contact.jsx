import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
const formRef = useRef(null);
const [form, setform] = useState({name:'', email:'', message:''});
const [isLoading, setisLoading] = useState(false);

const {alert, showAlert, hideAlert} = useAlert();

const handleChange = (e) => {
  setform({...form, [e.target.name]: e.target.value});
};

const handleFocus = () => {};

const handleBlur = () => {};

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

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert {...alert}/> */}
      <div className='fex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in Touch
        </h1>
      </div>

      <form 
      className="w-full flex flex-col gap-7 mt-14"
      onSubmit={handleSubmit}
      >
        <label className="text-black-500 font-semibold">
          Name
          <input 
            type="text"
            name='name' 
            className='input' 
            placeholder='John' 
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>

        <label className="text-black-500 font-semibold">
          Email
          <input 
            type="email"
            name='email' 
            className='input' 
            placeholder='John@gmail.com' 
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>

        <label className="text-black-500 font-semibold">
          Your Message
          <textarea 
            name='message' 
            rows={4}
            className='textarea' 
            placeholder='Let me know how can I help you' 
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        </label>

        <button 
          type='submit'
          className='btn'
          disabled ={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      
    </section>
  )
}

export default Contact


