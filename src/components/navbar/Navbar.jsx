import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'

export const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <a href='#home'> <AiFillHome /> </a>
        <a href='#experience'> <AiFillHome /> </a>
        <a href='#contact'> <AiFillHome /> </a>
      </div>
    </nav>
  )
}
export default Navbar;