import React from 'react'
import images from '../../constants/images';
import { FaCrown, FaShoppingCart } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';
import { SiEthereum } from 'react-icons/si';
import { BsCoin } from 'react-icons/bs'

import './Navbar.css';

const Navbar = ({ toggleMenu, setToggleMenu }) => {
  return (
    <nav className='app__navbar'>
        <div className={"app__navbar-ham " + (toggleMenu && "active")} onClick={() => setToggleMenu(!toggleMenu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
        </div>
        <div className="app__navbar-logo">
            <img src={images.alyx} alt="logo" />
        </div>
        <div className='app__navbar-info'>
            <div className='app__navbar-claim'>
                <button className='app__navbar-claim_button'>
                    <FaCrown />
                    <div className='button__text'>
                        <span>Claim</span>Rewards<span></span> 
                    </div>
                    
                </button>
            </div>
            <div className='app__navbar-lang'>
                <VscGlobe />
                <div className='lang__selector'>
                    EN
                </div>
            </div>
            <div className='app__navbar-mainnet'>
                <div className='app__navbar-mainnet_title'>
                    <p>MAINNET NETWORK</p>
                </div>
                <div className='app__navbar-mainnet_info'>
                    <div className='ether__info mainnet__info'>
                        <SiEthereum />
                        0.16 ETH
                    </div>
                    <div className='coin__info mainnet__info'>
                        <BsCoin />
                        <span>-&nbsp;</span> ALYX
                    </div>
                    
                </div>
            </div>
            <div className='app__navbar-avatar'>
                <div className='avatar'>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="" />
                </div>
                <div className='shopping__cart'>
                    <FaShoppingCart />
                </div>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar