import React from 'react'
import './contact.css'
import {MdOutlineEmail,MdArrowCircleRight} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();

var fromName = document.querySelector(`[name="name"]`).value;
var messageHtml = document.querySelector('#message').value;
var templateParams = {
  to_name: 'Tchetta Frank',
  from_name: fromName,
  message: messageHtml
};
(function(){
  emailjs.init("QizjnWWHv5Zr9tTT4");
})();

emailjs.send('service_e3fpgc5', 'template_qb547ij', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.querySelector(`[name="name"]`).value = '';
    document.querySelector(`[name="email"]`).value = '';
    document.querySelector('[name="message"]').value = '';
  }, function(error) {
    console.log('FAILED...', error);
  });
};
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>

<div className="container contact__container">
<div className="contact__options">
<h3>By</h3>
<article className='contact__option'>

<MdOutlineEmail className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span> Email</p>
<h5>franktchetta54@gmail.com</h5>
<a href='mailto:franktchetta54@gmail.com' target='_blank'   rel="noreferrer">Send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<p> <span><MdArrowCircleRight />  </span>  LinkedIn</p>
<h5>Profile</h5>
<a href='#nothing'>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span>  Whatsapp</p>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237672776467'
target='_blank'   rel="noreferrer">Text me on Whatsapp</a>
</article>
</div>
<div id="form"><h4>Send me a direct message</h4>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder=' Full name' required/><br /><br />
<input type="email" name='email' placeholder=' Your email' required/><br /><br />
<textarea name="message" id="message" cols="30" rows="10"
placeholder=' your message' required></textarea><br /><br />
<button type="submit" className='btn btn-primary'>send message</button><br />
</form></div>
</div>
</section>
)
}
export default Contact