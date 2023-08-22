import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/joshua-palmer-891024263/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jpalm60/Aggie-Coin" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/j.palm6/" target="_blank"><GrInstagram/></a>


    </div>
  )
}

export default HeaderSocials