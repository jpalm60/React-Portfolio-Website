import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_le4zthw', 'template_ogs5fmr', form.current, 'xLJS0rfNIpZMBc_zE')

    e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jtpalmer89@gmail.com</h5>
            <a href="mailto:jtpalmer89@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Meta Messenger</h4>
            <h5>Joshua Palmer</h5>
            <a href="https://m.me/josh.palmer.927/" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+19194548400</h5>
            <a href="https://wa.me/19194548400?text=" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} on onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact