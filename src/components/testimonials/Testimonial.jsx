/*import React, { useState } from 'react';
import axios from 'axios';
import './testimonial.css';

const Testimonial = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/submit-testimonial', {
        name,
        message,
      });

      if (response.data.success) {
        setSuccess(true);
        setName('');
        setMessage('');
      }
    } catch (error) {
      setError('Failed to submit testimonial');
    }
  };

  return (
    <div className="testimonial-container">
      <h2>Testimonial Form</h2>
      {success && <p>Thank you for your testimonial!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Testimonial;*/

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './testimonials.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'

const Testimonial = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://lazy-teal-hare-belt.cyclic.app/api/testimonial")
        .then((response) => {
          const formattedData = response.data.data.map((item) => ({
            id: item._id,
            avatar: item.avatar,
            name: item.name,
            review: item.review,
          }));
          setData(formattedData);
        })
        .catch((error) => {
          console.log("error fetching portfolio data:", error);
        });
    }, []);

    return (
      <section id="testimonials">
    <h5>Review from Clients</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        data.map(({ id, avatar, name, review }) => (
        
        <SwiperSlide key={id} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5>{name}</h5>
          <small className="client_review">{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
    );
}
export default Testimonial;