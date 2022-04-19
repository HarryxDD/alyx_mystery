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
                <div className="for__sale">
                    <div className="for__sale-switch">
                        <input type="checkbox" id="switch"/>
                        <label for="switch">
                            <div>
                                <h2 className="for__sale-title"> For Sale </h2>
                            </div>
                            <span></span>
                        </label>
                    </div>
                </div>
                <hr className="market__sidebar-separator" />
                <div className="market__catalogue">
                    <div className="market__catalogue-list">
                        <p className="catalogue__list-tittle">NFT COLLECTION
                            <div className="tintable-image">
                                <img src={images.arrowup} className="arrow" alt=""/>
                            </div>
                        </p>
                        <div className="catalogue__list-item">
                            <div className="mt-4">
                                <p className="catalogue__list-item__tittle">Featured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar