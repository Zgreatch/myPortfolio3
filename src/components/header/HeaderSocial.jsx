import React from 'react'

import facebook from '../../assets/facebook.png'
//import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com' target='blank'><img src={linkedin} alt="linkedin icon" /> </a>
<a href='https://github.com' target='blank'> <img src={github} alt="github icon" /> </a>
<a href='https://facebook.com' target='blank'> <img src={facebook} alt="facebook icon" /> </a>
{/*<a href='https://twitter.com' target='blank'><img src={twitter} alt="twitter icon"/> </a>*/}
</div>
)
}

export default HeaderSocial
