import React from 'react'
import './header.css' 
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/changer.png' 
import HeaderSocial from './HeaderSocial'//import of headerSocial component

export const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hello I'm </h5>
                <h1>Tchetta Frank</h1>
                <h5 className='text-light'>Software Engineer </h5>
                <CTA/> 
                <HeaderSocial/> {/*same here*/} 
                <div className='my_image'>
                    <img src={me} alt='my face'/>
                </div>
                <a href='#contact' className='scroll-down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;