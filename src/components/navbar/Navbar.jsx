import React from 'react';
import './navbar.css';
import { AiFillHome, AiOutlineInfoCircle, AiOutlineMail, AiOutlineUser, AiOutlineAppstore } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <a href='#home'> <AiFillHome /> </a>
        <a href='#experience'> <AiOutlineUser /> </a>
        <a href='#about'> <AiOutlineInfoCircle /> </a>
        <a href='#contact'> <AiOutlineMail /> </a>
        <a href='#services'> <AiOutlineAppstore /> </a>
      </div>
    </nav>
  );
};

export default Navbar;
