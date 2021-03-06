import React from 'react'
import images from '../../../constants/images'

import './Header.css'


async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0]
  return account
}

const Header = () => {

  const connectButtonOnClick = () => {
    if (typeof window !== "undefined") {
      getAccount().then((res) => {
        console.log(res);
      })
    }
  }

  return (
    <div className='app__header'>
        <div className='app__header-info'>
          <div className='app__header-image'>
            <img src={images.header2} alt="" />
          </div>
          <div className='info__overlay'>
            <div className='info__overlay-highlight'>
              <p>MIDTERM ASSIGNMENT HAS JUST ENDED</p>
            </div>
            <div className='info__overlay-nor'>
              <img src={images.alyx} alt="" />
              <p className="info__overlay-textp">Thanks Mr. Richard Sharp!</p>
              <p>PLEASEEE GIVE US A GOOD MARK</p>
              <div className='info__button'>
                <button className='info__button-claim'>
                  Claim
                </button>
                <button className='info__button-buy' onClick={connectButtonOnClick}>
                  Buy Alyx
                </button>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Header