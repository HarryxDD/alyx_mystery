import React from 'react'
import images from '../../../constants/images';

import './sidebarMarket.css'

const sidebarMarket = ({ toggleMenu }) => {
  return (
    <div className="app__sidebar">
      <div className={"sidebar__actions" + (toggleMenu && "active")}>
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
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            Snoopdog
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            The Walking Dead
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            Creator Fund's Legacy
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            Lady Pixy Avatars
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className="market__sidebar-separator" />
                <div className="market__catalogue mt_1">
                    <div className="market__catalogue-list">
                        <p className="catalogue__list-tittle">NFT TYPE
                            <div className="tintable-image">
                                <img src={images.arrowup} className="arrow" alt=""/>
                            </div>
                        </p>
                        <div className="catalogue__list-item">
                            <div className="mt-4">
                                <p className="catalogue__list-item__tittle">Featured</p>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            ALL
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            LANDS
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            ENTITIES
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="tintable-image">
                                        <p className="sidebar__item-tittle">
                                            <img src={images.a} alt="" className="feature__logo" />
                                            EQUIPMENTS
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sidebarMarket