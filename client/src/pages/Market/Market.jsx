import React, { useState } from 'react';
import { SidebarMarket, MakerHeader, MakerProducts } from '../../components'
import { Link } from 'react-router-dom'
import './Market.css'

const Market = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__market">
        {/* <SidebarMarket toggleMenu={toggleMenu}/> */}
        <div className="app__market-content">
          <MakerHeader/>
          <Link to="/productinfo">
            <MakerProducts/>
          </Link>
          
        </div>
    </div>
  )
}

export default Market