import React from 'react'
import { data } from '../../constants'

import './Partner.css'

const Partner = () => {
  return (
    <div className='app__partner'>
        <div className='app__partner-list item__padding'>
            <div className='list__title'>
                <p className='text__category'>SOME OF OUR</p>
                <h1 className='text__title'>PARTNERS</h1>
            </div>
            <div className='list__image'>
                {data.partners.map((partner, index) => (
                    <div className='list__item' key={index}>
                        <a href={partner.link}>
                            <img src={partner.image} alt="" ></img>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partner