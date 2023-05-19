import React from 'react';
import './contact.css';

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact container">
        <div className="contact__options">
          <article className='contact_option'>
            {/* <MdOutlineEmail className='contact__option__icon' /> */}
            <h4>Email</h4>
            <h5>myEmail@gmail.com</h5>
            <a href='mailto:aldenovpoutine99@gmail.com' target='_blank' rel='noopener noreferrer'>send a message</a>
          </article>

          <article className='contact_option'>
            {/* <AiOutlineLinkedin className='contact_option_icon' /> */}
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href='https://www.linkedin.com/in/brown-djomo-844b96164/' target='_blank' rel='noopener noreferrer'>Tap me on LinkedIn</a>
          </article>

          <article className='contact_option'>
            {/* <BsWhatsapp className='contact_option_icon' /> */}
            <h4>WhatsApp</h4>
            <h5>Direct message</h5>
            <a href='https://web.whatsapp.com/send?phone=+237657268549' target='_blank' rel='noopener noreferrer'>WhatsApp me</a>
          </article>
        </div>

        <form>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
