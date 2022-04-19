import React from 'react'
import images from '../../constants/images';
import { IoGameController } from 'react-icons/io5'
import { FaStore, FaInfo } from 'react-icons/fa'



import './Sidebar.css'

const Sidebar = ({ toggleMenu }) => {
  return (
    <div className={'app__sidebar ' + (toggleMenu && "active")}>
        <div className="main__sidebar">
            <ul className='app__sidebar-menu'>
                <li>
                    <div className='menu__icon menu__icon-home'>
                        <img src={images.a} alt="" />
                    </div>        
                    HOME
                </li>
                <li>
                    <div className='menu__icon menu__icon-game'>
                        <IoGameController />
                    </div>
                    GAME
                </li>
                <li>
                    <div className='menu__icon menu__icon-market'>
                        <FaStore />
                    </div>
                    MARKET
                </li>
                <li>
                    <div className='menu__icon menu__icon-about'>
                        <FaInfo />
                    </div>
                    ABOUT
                </li>
            </ul>
        </div>
        
        <div className="sidebar__actions">
            <div className="market__sidebar">
                <h2 className="shope__tittle">SHOP</h2>
                <hr className="market__sidebar-separator" />
                <div className="for__sale">
                    <div className="for__sale-switch">
                        <input type="checkbox" id="switch"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar