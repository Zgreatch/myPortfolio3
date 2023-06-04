/*import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
//import emailjs from 'emailjs-com';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  /*const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5vuauza', 'template_fdnnl56', form.current, 'EmSdUNQzQuxkUqGWx')
    e.target.reset().then((result) => {
    console.log(result.text)
    }, (error) => {
      console.log(error.text);
    });
  };*/
  /*const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e3fpgc5', 'Ytemplate_qb547ij', form.current, 'YOUR_EMAILJS_USER_ID')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });
    e.target.reset();
  };

  // Fetch the form data
  /*const formData = new FormData(form.current);

  // Make a POST request to your backend API endpoint
  axios.post('/api/send-email', formData)
    .then((response) => {
      console.log(response.data);
      // Handle any success actions (e.g., show a success message)
    })
    .catch((error) => {
      console.error(error);
      // Handle any error cases (e.g., show an error message)
    });

    e.target.reset();
  };*/

      /*return (
        <section id="contact">
          <h5>Get in touch</h5>
          <h2>Contact me</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option__icon'/>
                <h4>Email</h4>
                <h5>myEmail@gmail.com</h5>
                <a href='mailto:aldenovpoutine99@gmail.com' target='_blank'>send a message</a>
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
                <a href='https://web.whatsapp.com/send?phone=+237657268549' target='_blank'>Whatsapp me</a>
                </article>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Full name' required/>
                <input type="email" name='email' placeholder='Your email' required/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message' required></textarea>
                <button type="submit" className='btn btn-primary'>send message</button>
              </form>
            </div>
          </section>
  )
}
export default Contact*/

import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import axios from 'axios';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Fetch the form data
    const formData = new FormData(form.current);

    // Make a POST request to the backend API endpoint
    axios.post('/api/send-email', formData)
      .then((response) => {
        console.log(response.data);
        // Handle any success actions (e.g., show a success message)
      })
      .catch((error) => {
        console.error(error);
        // Handle any error cases (e.g., show an error message)
      });

    e.target.reset();
  };

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
                <h5>myEmail@gmail.com</h5>
                <a href='mailto:franktchetta54@gmail.com' target='_blank'>send a message</a>
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
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
