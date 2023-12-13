import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import emailImg from '../../assets/emailpro.svg';
import './Emailpro.css'

export const Emailpro = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phby018', 'template_9t4bp1o', form.current, 'za5o3Ut1J3nLd3gOM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div>
        

<img id='emailsimg' src={emailImg} alt=""  className=" mt-32 mb-36 ml-28  lg:h-[386px]  " />

    
    <form className='emailform' ref={form} onSubmit={sendEmail}>
      <p ><input className='emailp' placeholder='Name' type="text" name="from_name" /></p>
      <p ><input className='emailp' placeholder='Email' type="email" name="user_email" /></p>
      <p ><textarea className='emailp1' placeholder='Message' name="message" /></p>
      <button className='emaibtn' type="submit" >Send</button>
    </form>
    </div>
  );
};
