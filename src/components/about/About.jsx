import React from 'react';
import me from '../../assets/me2.png'
import { FaHtml5, FaCss3, FaJs, FaCode, FaJava, FaPalette, FaVectorSquare } from 'react-icons/fa';
import './about.css';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
      <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
              <img src={me} alt="Profile" />
          </div>
          <div className="about-text">
            
            <article>
              <h3>Introduction</h3>
              <p>My Name is Tchetta Frank, also called Tchetz or Zgreat. I am a student in the University BUEA
                the faculty of Enginnering and Technology, Department of Computer Engineering since September 2021
              </p>
              <h3>Web Dev</h3>
              <p>
                <FaHtml5 className='about-icon'/><FaCss3 className='about-icon'/><FaJs className='about-icon'/><br/>
              I am a passionate and dedicated web developer with a
              background in front-end development. I have few years of
              experience in building responsive and user-friendly websites using
              HTML, CSS, and JavaScript. My goal is to create visually stunning
              and intuitive web applications that provide an exceptional user
              experience.
              </p>
              <h3>Desktop Ui/Ux</h3>
              <p>
                <FaCode className='about-icon'/><FaJava className='about-icon'/><br/>
                I am also a Full-Stack Desktop developer, with knowledge on Java and C++
              </p>
              <h3>Graphics Design</h3>
              <p>
                <FaPalette className='about-icon'/><FaVectorSquare className='about-icon'/><br/>
                I am a passionate and certified <b>Graphics Designer</b> with up to 1 year of experience
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
