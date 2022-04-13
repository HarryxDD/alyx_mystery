import React from 'react'
import './Achievement.css'

const Achievement = ({ image, title, desc }) => {
  return (
    <div className='achievement__item'>
        <div className='item__image'>
            <img src={image} alt="" />
        </div>
        <div className='item__title'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Achievement