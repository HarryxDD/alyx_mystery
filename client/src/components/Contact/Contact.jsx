import React from 'react'

import { images, data } from '../../constants'

import { Link } from 'react-router-dom'

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

            <div className='info__logo'>
                <img src={images.alyx} alt="" />
            </div>
            
            <div className='contact__info'>
                <div className='info__pages'>
                    <h3 className='info__title'>PAGES</h3>
                    <ul className='info__list'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li><Link to="/">
                                Game
                            </Link></li>
                        <li><Link to="/market">
                                Market
                            </Link></li>
                        <li><Link to="/about">
                                About
                            </Link></li>
                        <li><Link to="/community">
                                Community
                            </Link></li>
                    </ul>

                </div>

                <div className='info__social'>
                    <h3 className='info__title'>SOCIAL</h3>
                    <div className='info__item'>
                        {data.social.map((social, index) => (
                            <div className='item__list' key={index}>
                            <a href={social.link}>
                                <img src={social.image} alt="" ></img>
                            </a>
                        </div>
                        ))}
                    </div>
                    
                </div>
            </div>

        </div>
        <div className='app__contact-copyright'>
        Copyright © 2022 The Alyx Mystery All Wrongs Reserved
        </div>
    </div>
  )
}

export default Contact