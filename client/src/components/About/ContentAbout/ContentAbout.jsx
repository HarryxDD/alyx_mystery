import React from 'react'
import images from '../../../constants'
import './ContentAbout.css'

const ContentAbout = () => {
    return (
        <div className="tab__menu">
            <div className="sb-container">
                <ul className="tab__link">
                    <li className="tab__menu-link">
                        <a href="" className="subapp_link">
                            The Sandbox
                            </a>
                    </li>
                    <li className="tab__menu-link tab__menu-link-a">
                        <a href="" className="subapp_link">
                            SAND
                            </a>
                    </li>
                    <li className="tab__menu-link tab__menu-link-a">
                        <a href="" className="subapp_link">
                            Blog
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContentAbout