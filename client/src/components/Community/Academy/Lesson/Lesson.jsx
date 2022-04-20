import React from 'react'

import './Lesson.css'

const Lesson = ({image, title, desc}) => {
  return (
    <div className='academy__lesson'>
        <div className='academy__item'>
            <div className='academy__item-img'>
              <img src={image} alt="" />
            </div>
            <div className='academy__item-title'>
                {title}
            </div>
            <div className='academy__item-desc'>
                {desc}
            </div>
        </div>
    </div>
  )
}

export default Lesson