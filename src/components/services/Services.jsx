import React from 'react';
import { FaCode, FaDesktop, FaMobile } from 'react-icons/fa';
import './services.css';

export const Services = () => {
  return (
    <div id="services" className="section">
      <div className="container">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service">
            <FaCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              I specialize in building responsive and interactive websites
              using the latest web technologies like HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="service">
            <FaDesktop className="service-icon" />
            <h3>UI/UX Design</h3>
            <p>
              I create visually appealing and user-friendly interfaces that
              enhance the overall user experience and leave a lasting impression.
            </p>
          </div>
          <div className="service">
            <FaMobile className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>
              I develop mobile applications for both iOS and Android platforms,
              ensuring seamless performance and engaging user interfaces.
            </p>
          </div>
          {/* Add more services as needed */}
        </div>
      </div>
    </div>
  );
};

export default Services;
