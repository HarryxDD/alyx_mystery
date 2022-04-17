import React from 'react'

import './AboutAlyxHeader.css'

const AboutAlyxHeader = () => {
  return (
        <div className="banner__alyx-section alyx__banner">
            <div className="info">
                <h2 className="info__title"> ALYX </h2>
                <h4 className="info__sub-title">SAND is the utility token used throughout The 
                Sandbox ecosystem as the basis for transactions and interactions. It is an ERC-20 
                utility token built on the Ethereum blockchain. 
                There is a finite supply of 3,000,000,000 SAND.</h4>
                <div className="btn__container">
                    <button type="button" className="btn__buy btn"> Buy Alyx </button>
                    <button type="button" className="btn__stake btn"> Stake Alyx </button>
                </div>
                <a href="" className="btn__link" target="_blank"> Read Binance Research on Alyx</a>
            </div>
            <figure>
                <img src="https://www.sandbox.game/img/17_Sand/ChestBig.gif" alt="chest" />
            </figure>
        </div>
  )
}

export default AboutAlyxHeader