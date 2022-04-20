import React from 'react'
import images from '../../constants/images';
import { IoGameController } from 'react-icons/io5'
import { FaStore, FaInfo } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = ({ toggleMenu }) => {
  return (
    <div className={'app__sidebar ' + (toggleMenu && "active")}>
<<<<<<< HEAD
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
=======
        <ul className='app__sidebar-menu'>
            <li>
                <Link to="/">
                <div className='menu__icon menu__icon-home'>
                    <img src={images.a} alt="" />
                </div>        
                HOME
                </Link>
            </li>
            <li>
                <Link to="/">
                <div className='menu__icon menu__icon-game'>
                    <IoGameController />
                </div>
                GAME
                </Link>
            </li>
            <li>
                <Link to="/market">
                <div className='menu__icon menu__icon-market'>
                    <FaStore />
                </div>
                MARKET
                </Link>
            </li>
            <li>
                <Link to="/about">
                <div className='menu__icon menu__icon-about'>
                    <FaInfo />
                </div>
                ABOUT
                </Link>
            </li>
        </ul>
>>>>>>> 70b39ead606d7d9e44da5f28c734741c1db3dd1e
    </div>
    )
}

export default Sidebar