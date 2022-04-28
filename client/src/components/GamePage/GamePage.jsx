import React from 'react'

import './GamePage.css'

const GamePage = () => {
  return (
    <div className='app__gamepage'>
        <div className='app__gamepage-background'>
            <img src="https://wallpaperaccess.com/full/1200963.jpg" alt="" />
        </div>
        <div className='app__gamepage-content'>
            <h1>START YOUR JOURNEY</h1>

            <p className='beta__warning'>This game is under beta version.</p> 
            <p className='beta__release'>Expected release day: 17/7/2022</p>

            <a href='http://alyx-mystery.byethost14.com/fighting/'>
              <button>
                PLAY GAME
              </button>
            </a>

            <h4 className='gamepage_mobile-warning'>Not available on mobile devices</h4>
            
        </div>
    </div>
  )
}

export default GamePage