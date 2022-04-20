import React from 'react'
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

import './Social.css'

const Social = () => {
  return (
    <div className='comm__social comm__padding'>
      <div className='social__discord social__item'>
        <FaDiscord />
        <h3>Community</h3>
        <p>Join our Discord Community</p>
      </div>
      <div className='social__twitter social__item'>
        <FaTwitter />
        <h3>News</h3>
        <p>Be the first to discover our news</p>
      </div>
      <div className='social__twitch social__item'>
        <FaTwitch />
        <h3>Streams</h3>
        <p>Follow our live streams</p>
      </div>
      <div className='social__youtube social__item'>
        <FaYoutube />
        <h3>Youtube</h3>
        <p>Watch all our latest videos</p>
      </div>
    </div>
  )
}

export default Social