import React from 'react'

import './Overview.css'
import images from '../../../constants/images';

const Overview = () => {
  return (
    <div className='sticky__wrapper'>
                <div className='display__asset'>
                    <div className='square'>
                        <div className='product__picture'>
                            <img src={images.lizardon}/>
                        </div>
                    </div>
                </div>
                
                <div className='attribute__container'>
                    <h3>CURRENT PRICE</h3>

                    <div className='action__block'>
                        <p className='alx__price'>59.00 ALX</p>
                        <p className='usd__price'>420.69 USD</p>
                    </div>
                </div>

                <div className='attribute__user'>
                    <h4 className='user__name'>
                        <a className='user__profile' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>@Amogus</a>
                    </h4>
                    
                    <p className='user__stat'>
                        100/200
                    </p>
                </div>

                <div className='button__layout'>
                <a href='https://www.youtube.com/watch?v=D2_r4q2imnQ' target='_blank'><button className='add__cart'>
                        <h4>Add To Cart</h4>
                    </button></a>
                    
                    <a href='https://www.youtube.com/shorts/qBrxJ5RuO-4' target='_blank'><button className='buy__now'>
                        <h4>Buy Now</h4>
                    </button></a>
                </div>
    </div>
  )
}

export default Overview