import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import * as emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  emailjs.init('QizjnWWHv5Zr9tTT4');

  function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    emailjs.sendForm('service_e3fpgc5', 'template_qb547ij', event.target)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('An error occurred while sending the email:', error);
      });
  
    // Clear the form fields after submission
    event.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* Your contact options */}
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>franktchetta54@gmail.com</h5>
            <a href='mailto:franktchetta54@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option__icon'/>
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href='https://www.linkedin.com/in/brown-djomo-844b96164/' target='_blank'>Tape me on LinkedIn</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href='https://web.whatsapp.com/send?phone=+237672776467' target='_blank'>Whatsapp me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Full name' required/><br /><br />
          <input type="email" name='email' placeholder=' Your email' required/><br /><br />
          <textarea name="message" id="message" cols="30" rows="10" placeholder=' your message' required></textarea><br /><br />
          <button type="submit" className='btn btn-primary'>send message</button><br />
          </form>
      </div>
    </section>
  );
};

export default Contact;