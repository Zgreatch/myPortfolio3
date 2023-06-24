//import React, { useEffect, useState } from 'react';
//import axios from 'axios'
import React from 'react'
import './portfolio.css'
import img1 from '../../assets/Avatar1.png'
import img2 from '../../assets/Avatar2.png'
import img3 from '../../assets/Avatar3.png'

/* const (data, setData) = useState([])

useEffect(() => {
  axios.get(" ").then(response => {
    const formattedData = response.data.data.map((item => ({
      id: item._id,
      image: item.image,
      title: item.title,
      github: item.githhub,
      demo: item.demo,
    })));
    setData(formattedData)

  }).catch(error => {
    console.log("Error, fetching Portfolio data:", error);
  })

}, [])  */

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>Github</a>
            <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*  */}

      </div>
    </section>
  )
}

export default Portfolio
