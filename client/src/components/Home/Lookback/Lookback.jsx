import React from 'react'
import { Achievement } from '../../index'
import { images, data } from '../../../constants'

import './Lookback.css'

const Lookback = () => {
  return (
    <div className='app__lookback'>
        <div className='app__lookback-achievement item__padding'>
            <div className='achievement__title'>
                <p className='text__category'>A LOOK BACK AT</p>
                <h1 className='text__title'>ALPHA SEASON 2</h1>
            </div>
            <div className='achievement__list'>
                {data.achievements.map((achievement, index ) => (
                    <Achievement key={achievement.title + index} image={achievement.image} title={achievement.title} desc={achievement.desc}/>
                ))}
            </div>
        </div>
        <div className='app__lookback-best'>
            <div className='best__title item__padding'>
                <p className='text__category'>ALPHA SEASON 2</p>
                <h1 className='text__title'>BEST MOMENTS</h1>
            </div>
            <div className='best__image'>
                <img src="https://wallpaperaccess.com/full/4813956.jpg" alt="" />
            </div>
        </div>
        <div className='app__lookback-coming item__padding'>
            <div className='coming__title'>
                <p className='text__category'>COMING SOON</p>
                <h1 className='text__title'>SEASON 3</h1>
                <p className='coming__title-text'>Stay tuned for the Season 3 date announcement.</p>
                <div className='coming__title-button'>
                    <button>
                        Register for Season 3
                    </button>
                </div>
                
            </div>
            <div className='coming__img'>
                <img src={images.knight} alt="" />
                <img src="https://www.sandbox.game/img/14_Home/gradient-overlay.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Lookback