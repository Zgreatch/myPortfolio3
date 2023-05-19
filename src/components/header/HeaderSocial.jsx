import React from 'react'
//import {BsLinkedin} from 'react-icons/bs'
//import {FaGithub} from 'react-icons/fa'
//import {FaFacebookF} from 'react-icons/fa'
//import {CgTwitter} from 'react-icons/cg'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
//import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
export const HeaderSocial = () => {
    return (
        <div className="header_social">
            <a href="https://linkedin.com" target='blank'> <img src={linkedin} width="30" height="30" alt="linkedin"/> </a>
            <a href="https://linkedin.com" target='blank'>  </a>
            <a href='https://github.com' target="blank"> <img src={github} width="30" height="30" alt="github"/></a>
            <a href='https://facebook.com" target="blank'> <img src={facebook} width="30" height="30" alt="facebook"/> </a>
            <a href='https://twitter.com' target='blank'>  </a>
        </div>
    )
}
export default HeaderSocial