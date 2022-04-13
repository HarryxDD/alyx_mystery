import React from 'react'
import images from '../../../constants/images'

import './Header.css'

const Header = () => {
  return (
    <div className='app__header'>
        <div className='app__header-info'>
          <div className='app__header-image'>
            <img src={images.header2} alt="" />
          </div>
          <div className='info__overlay'>
            <div className='info__overlay-highlight'>
              <p>ALPHA SEASON 2 HAS JUST ENDED</p>
            </div>
            <div className='info__overlay-nor'>
              <img src={images.alyx} alt="" />
              <p>Thanks to all Alpha Season 2 players!</p>
              <p>Season 2 Alpha Pass winners can now claim their rewards</p>
              <div className='info__button'>
                <button className='info__button-claim'>
                  Claim
                </button>
                <button className='info__button-buy'>
                  Buy Land
                </button>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Header