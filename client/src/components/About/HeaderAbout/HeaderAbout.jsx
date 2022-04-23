import React from 'react'
import {images} from '../../../constants'

import './HeaderAbout.css'

const Header_About = () => {
    return (
        <div className="app__header">
            <div className="app__header-info">
                <div className="app__header-img">
                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/700/hub/bg_02.jpg" alt="banner" />
                </div>
                <div className="app__header-text">
                    <div className="app__header-title">
                        <p>WELCOME</p>
                    </div>
                    <div className="app__header-dec">
                        <h1>THE ALYX </h1>
                        <p>The Alyx is a community-driven platform where creators can 
                            monetize voxel ASSETS and gaming experiences on the blockchain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header_About