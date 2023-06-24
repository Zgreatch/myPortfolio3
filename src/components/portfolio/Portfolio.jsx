/*//import React, { useEffect, useState } from 'react';
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

}, [])  

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
        {/*  *//*}
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
        {/*  *//*}
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
        {/*  *//*}

      </div>
    </section>
  )
}

export default Portfolio*/

/*import React, {useEffect, useState } from 'react';
import axios from "axios"; 
import './portfolio.css';

const Portfolio = () => {
  const [data, setData] = useState([]);
    useEffect(() =>{
      axios.get("https://lazy-teal-hare-belt.cyclic.app/api/testimonial").then(response => {
        const formattedData = response.data.data.map(item => ({
          id:item. id,
          image: item.image,
          title: item.title,
          github: item.github,
          demo: item.demo
        }));
      setData(formattedData)
      }).catch(error) => {
        console.log("Error fetching portfolio data:", error);
      })
}, [])

return(
<section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className="container portfolio_container"> 
{
data.map(({id, image, title, github, demo })=> (
<article key={id} className='portfolio_item'></article>
<div className="portfolio__item-img">
<img src={image} alt={title} />
</div>/.portfolio_iten-ing
<h3>(title)</h3>
<div className="portfolio_item-cta">
<a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
<a href={demo} className='btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
</div>/portfolio_item-cta
<h3> [title) </h3>
<div classlame="portfolio_item-cta">
<a href=(github) className='btn" target='_blank' rel="noopener noreferrer">Github</a>
<a href=(demo) className='btn btn-primary" target="_blank" rel="noopener noreferrer" Live Demo</a>
</div>/.portfolio item cta
</article>/.portfolio_Item
</div>/.container.portfolio_container
</section>/#portfolio

export default Portfolio;*/

/*import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import './portfolio.css';

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://lazy-teal-hare-belt.cyclic.app/api/portfolio")
      .then(response => {
        const formattedData = response.data.data.map(item => ({
          id: item.id,
          image: item.image,
          title: item.title,
          github: item.github,
          demo: item.demo
        }));
        setData(formattedData);
      })
      .catch(error => {
        console.log("Error fetching portfolio data:", error);
      });
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container"> 
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio__item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
          
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lazy-teal-hare-belt.cyclic.app/api/testimonial")
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item._id,
          image: item.image,
          title: item.title,
          github: item.github,
          demo: item.demo,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log("error fetching portfolio data:", error);
      });
  }, []);

  return (

    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>

        <div className="container portfolio__container">
          
            
            {
              data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div> 
            <h3>{title}</h3> 
            <div className=".portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
              </article>
              ))
            }
            </div>      
    </section>
  );
};
export default Portfolio;
