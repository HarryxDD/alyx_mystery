import React from 'react'
import { Header, Newsfeed, Lookback, Partner } from '../../components'

import './Market.css'

const Market = () => {
  return (
    <div className="app__market">
        <div className="app__market-container">
            <div className="app__market-list">
                <div className="market__sidebar-actions">
                    <div className="market__sidebar">
                        <h2>Shop</h2>
                    </div>
                </div>
            </div>
            <div className="app__market-welcome">

            </div>
        </div>
    </div>
  )
}

export default Market