import React, { useState } from 'react';
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

export default Testimonial;