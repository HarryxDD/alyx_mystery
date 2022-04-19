import React, { useState } from 'react';
import { sidebarMarket } from '../../components'

import './Market.css'

const Market = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__market">
        <sidebarMarket toggleMenu={toggleMenu}/>
    </div>
  )
}

export default Market