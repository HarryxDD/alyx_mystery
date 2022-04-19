import React from 'react'
import { FaSearch, FaDiscord, FaTelegramPlane, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

import './Navigation.css'

const Navigation = () => {
  return (
    <div className='comm__navbar comm__padding'>
      <div className='comm__title'>
        <p>The Alyx Community</p>
      </div>
      <div className='comm__search'>
        <FaSearch />
        <input type="text" placeholder='Search article' />
      </div>
      <div className='comm__social-link'>
        <FaDiscord />
        <FaTelegramPlane />
        <FaTwitter />
        <FaInstagram />
        <FaFacebookF />
      </div>
    </div>
  )
}

export default Navigation