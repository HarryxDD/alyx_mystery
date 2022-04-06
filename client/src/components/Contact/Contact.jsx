import React from 'react'

import { images } from '../../constants'

import './Contact.css'

const Contact = () => {
  return (
    <div className='app__contact'>
        <div className='app__contact-join'>
            <div className='join__image'>
                <img src={images.brotherhood} alt="" />
            </div>
            <div className='join__desc'>
                <h1>JOIN OUR COMMUNITY</h1>
                <p>Be part of our amazing community and stay tuned for any news.</p>
                <div className='join__btn'>
                    <button>JOIN US</button>
                </div>
            </div>
        </div>
        <div className='app__contact-info'>
            VÃI LỒN
        </div>
        <div className='app__contact-copyright'>
        Copyright © 2022 The Alyx Mystery All Wrongs Reserved
        </div>
    </div>
  )
}

export default Contact