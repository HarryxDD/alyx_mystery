import React from 'react'
import { FaTwitter, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'

import './LatestPost.css'

const LatestPost = () => {
  return (
    <div className='comm__latest comm__padding'>
      <div className='latest__img'>
        <img src="https://strapi.sandbox.game/uploads/blog_banner_76dc57aa3e_e511e2edda.png" alt="" />
      </div>
      <div className='latest__desc'>
        <div className='desc__title'>
            <div className='desc__title-category'>
              <p>ANNOUNCEMENTS</p>
            </div>
            <div className='desc__title-title'>
              Spells of Genesis - Askian Door
            </div>
            <div className='desc__title-desc'>
              Enter the Askian door and get access to a collection of iconic characters from Spells of Genesis, the 1st blockchain-based mobile game ever made! Get yours and unlock an upcoming exclusive experience.
            </div>
          </div>
          <div className='desc__info'>
            <div className='desc__info-date'>
              Apr 11 - 3 min read
            </div>
            <div className='desc__info-social'>
              <FaTwitter />
              <FaFacebookF />
              <FaTelegramPlane />
            </div>
          </div>
      </div>
    </div>
  )
}

export default LatestPost