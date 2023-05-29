import React from 'react';
import { FaBriefcase, FaUniversity, FaHtml5, FaCss3, FaJs, FaCode, FaJava, FaDesktop } from 'react-icons/fa';
import './experience.css';

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className='twoExp'>
          <div className='expitems'>

            <div className="experience-item">
              <FaBriefcase className="experience-icon" />
              <div className="experience-details">
                <h3>Job Title</h3>
                <p>Rastany CyberCafe</p>
                <p>Duration: January 2020 - Present</p>
              </div>
            </div>

            <div className="experience-item">
              <FaUniversity className="experience-icon" />
              <div className="experience-details">
                <h3>Education</h3>
                <p>University of BUEA</p>
                <p>Duration: September 2021 - Present</p>
              </div>
            </div>
            <div className="experience-item">
              <FaDesktop className='experience-icon' />
              <div className="experience-details">
                <h3>Current Projects</h3>
                <p><span className='project'>Desktop Dev: </span> <a href='https://github.com/Zgreatch/myPortfolio3' target='blank'>CEF342</a> </p>
                <p><span className='project'>Wev Dev: </span> <a href='https://github.com/Zgreatch/myFirtRepo' target='blank'>React CEF344</a> </p>
              </div>
            </div>
          </div>

          <div className="programming-experience">
            <div className="languages">
              <h3>Web Development</h3>
              <div className="progress-bar">
                <FaHtml5 className="language-icon" />
                <span className="language"> HTML 50%</span>
                <div className="bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="progress-bar">
                <FaCss3 className="language-icon" />
                <span className="language"> CSS 50%</span>
                <div className="bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="progress-bar">
                <FaJs className="language-icon" />
                <span className="language"> JavaScript 40%</span>
                <div className="bar">
                  <div className="progress" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            <div className="languages">
              <h3>Programming Languages</h3>
              <div className="progress-bar">
                <FaCode className="language-icon" />
                <span className="language">C++ 65%</span>
                <div className="bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="progress-bar">
                <FaJava className="language-icon" />
                <span className="language">Java 65%</span>
                <div className="bar">
                  <div className="progress" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
