import React, { useCallback } from 'react'

import { FaTwitter, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

import './News.css'

const News = ({ image, category, title, date }) => {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/newsblog', {replace: true}), [navigate]);

  return (
    <div className='app__new' onClick={handleOnClick}>
      <div className='app__new-item'>
        <div className='item__title'>
          <div className='app__new-image'>
            <img src={image} alt="" />
          </div>
          <div className='app__new-category'>
            {category}
          </div>
          <div className='app__new-title'>
            {title}
          </div>
        </div>
        <div className='item__info'>
          <div className='app__new-date'>
            {date}
          </div>
          <div className='app__new-social'>
            <FaTwitter />
            <FaFacebookF />
            <FaTelegramPlane />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News