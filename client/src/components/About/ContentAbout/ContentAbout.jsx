import React from 'react'
import './ContentAbout.css'
import { Link } from 'react-router-dom'

const ContentAbout = () => {
    return (
        <div className="tab__menu">
            <div className="sb-container">
                <ul className="tab__link">
                    <li className="tab__menu-link">
                        <Link to="/about">The Alyx</Link>
                    </li>
                    <li className="tab__menu-link tab__menu-link-a">
                        <Link to="/about/coin">ALYX</Link>
                    </li>
                    <li className="tab__menu-link tab__menu-link-a">
                        <Link to="/community">Community</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContentAbout