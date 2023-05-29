import React from 'react';
import './footer.css';

export const Footer = () => {
  const references = [
    'John Doe, CEO of XYZ Company',
    'Jane Smith, Creative Director at ABC Agency',
    'Mike Johnson, Freelance Client',
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: dsfghgfgd@gmail.com</p>
            <p>Phone: +237 672 77 64 67</p>
          </div>
          <div className="references">
            <h3>References</h3>
            <ul>
              {references.map((reference, index) => (
                <li key={index}>{reference}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy-text">&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
