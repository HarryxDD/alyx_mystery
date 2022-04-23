import React from 'react'
import images from '../../constants/images';
import { IoGameController } from 'react-icons/io5'
import { FaStore, FaInfo } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className={'app__sidebar ' + (toggleMenu && "active")}>
        <ul className='app__sidebar-menu'>
            <li onClick={() => setToggleMenu(false)}>
                <Link to="/">
                <div className='menu__icon menu__icon-home'>
                    <img src={images.a} alt="" />
                </div>        
                HOME
                </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
                <Link to="/game">
                <div className='menu__icon menu__icon-game'>
                    <IoGameController />
                </div>
                GAME
                </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
                <Link to="/market">
                <div className='menu__icon menu__icon-market'>
                    <FaStore />
                </div>
                MARKET
                </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
                <Link to="/about">
                <div className='menu__icon menu__icon-about'>
                    <FaInfo />
                </div>
                ABOUT
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar