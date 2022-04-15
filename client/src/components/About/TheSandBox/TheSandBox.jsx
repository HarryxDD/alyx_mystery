import React from 'react'
import {images} from '../../../constants'

import './TheSandBox.css'

const TheSandBox = () => {
    return (
        <div className="home__sandbox page__main">
            <div className="static-page home__content-container">
                <section className="home__section-container sandbox">
                    <ul>
                        <li className="link__items">
                            <div className="icon-card">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/voxedit-icon.svg" alt="logo" />
                            </div>
                            <div className="background-rotate"></div>
                            <div className="home__wrapper">
                                <figure>
                                    <img src="https://www.sandbox.game/img/14_Home/Start_Row2_VoxEdit2.png" alt="planee" />
                                </figure>
                                <div className="home__wrapper-info">
                                    <h2 className="text__info"> VoxEdit</h2>
                                    <h4 className="text__info-decs">Create and animate voxel art. Export anywhere.</h4>
                                </div>
                            </div>
                        </li>
                        <li className="link__items">
                            <div className="icon-card">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/shop-icon.svg" alt="logo" />
                            </div>
                            <div className="background-rotate"></div>
                            <div className="home__wrapper">
                                <figure>
                                    <img src="https://www.sandbox.game/img/14_Home/Start_Row2_Marketplace.png" alt="planee" />
                                </figure>
                                <div className="home__wrapper-info">
                                    <h2 className="text__info"> Marketplace</h2>
                                    <h4 className="text__info-decs">One place to sell and collect the best ASSETS.</h4>
                                </div>
                            </div>
                        </li>
                        <li className="link__items">
                            <div className="icon-card">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/create-icon.svg" alt="logo" />
                            </div>
                            <div className="background-rotate"></div>
                            <div className="home__wrapper">
                                <figure>
                                    <img src="https://www.sandbox.game/img/14_Home/Start_Row2_GameMaker.png" alt="planee" />
                                </figure>
                                <div className="home__wrapper-info">
                                    <h2 className="text__info"> Game Maker</h2>
                                    <h4 className="text__info-decs">Make and Play any game that you can imagine.</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="home__section-container about">
                    <h4 class="home__section-container_text"> Learn About Our Products</h4>
                    <ul className="product-link">
                        <li className="link__items">
                            <div className="link-items_land">
                                <div className="home__wrapper">
                                    <div>
                                        <h3 class="text__info">LAND</h3>
                                        <p class="text__info-decs">Endless possibilities. Reserve yours today!</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="link__items">
                        <div className="link-items_game-maker">
                                <div className="home__wrapper">
                                    <div>
                                        <h3 class="text__info">GAME MAKER</h3>
                                        <p class="text__info-decs">Make and Play any game that you can imagine.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="link__items">
                        <div className="link-items_maker-fund">
                                <div className="home__wrapper">
                                    <div>
                                        <h3 class="text__info">GAME MAKER FUND</h3>
                                        <p class="text__info-decs">Get paid to create and share YOUR amazing voxel creations.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="home__section-container articles">
                    <h4 class="home__section-container_text"> Articles that may interest you</h4>
                    <ul className="articles__links">
                        <li className="articles__links-item">
                        <a rel="noreferrer" href="https://medium.com/sandbox-game/the-evolution-of-the-sandbox-762f0023349" target="_blank">
                            <div className="home__wrapper">
                                <h3 className="articles__text">THE ALYX</h3>
                                <p className="articles__sub-text">From 2D to 3D</p>
                            </div>
                            </a>
                        </li>
                        <li className="articles__links-item">
                        <a rel="noreferrer" href="https://medium.com/sandbox-game/the-evolution-of-the-sandbox-762f0023349" target="_blank">
                            <div className="home__wrapper">
                                <h3 className="articles__text">ERC-1155</h3>
                                <p className="articles__sub-text">A new standard</p>
                            </div>
                            </a>
                        </li>
                        <li className="articles__links-item">
                        <a rel="noreferrer" href="https://medium.com/sandbox-game/the-evolution-of-the-sandbox-762f0023349" target="_blank">
                            <div className="home__wrapper">
                                <h3 className="articles__text">MINECRAFT</h3>
                                <p className="articles__sub-text">Import your next work</p>
                            </div>
                            </a>
                        </li>
                        <li className="articles__links-item">
                        <a rel="noreferrer" href="https://medium.com/sandbox-game/the-evolution-of-the-sandbox-762f0023349" target="_blank">
                            <div className="home__wrapper">
                                <h3 className="articles__text">NTFS</h3>
                                <p className="articles__sub-text">User-generated content</p>
                            </div>
                            </a>
                        </li>
                    </ul>
                    <a className="blog__link">See the latest news!</a>
                </section>
            </div>
        </div>
    )
}

export default TheSandBox