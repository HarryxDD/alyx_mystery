import React from 'react'
import './AlyxContent.css'

const AlyxContent = () => {
    return (
        <div className="alyx__content">

            <div className="card__container">
                <div className="card__alyx-box">
                    <img src="https://www.sandbox.game/img/17_Sand/sandbox-logo-circle.svg" alt="circle" />
                    <hr className="border__vertical"></hr>
                    <div className="box__content">
                        <h2>The Alyx</h2>
                        <p>The Sandbox is a virtual Metaverse built on the Ethereum blockchain,
                             where players can build, own, and monetize their gaming experience</p>
                    </div>
                </div>
                <div className="card__alyx-box">
                    <img src="	https://www.sandbox.game/img/17_Sand/sand-logo-circle.svg" alt="circle" />
                    <hr className="border__vertical"></hr>
                    <div className="box__content">
                        <h2>Alyx</h2>
                        <p>The SAND token is an ERC-20 utility token that is used for value 
                            transfers as well as staking and governance.</p>
                    </div>
                </div>
            </div>

            <h2 className="current__pros"> Current products on The Sandbox platform include: </h2>
            
            <div>
            <section className="home__section-container sandbox mg__left">
                    <ul >
                        <li className="link__items set__height">
                            <div className="icon-card text__icon">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/voxedit-icon.svg" alt="logo" />
                                <h2 className="text__info text__icon-info"> VoxEdit</h2>
                            </div>
                            <div className="background-rotate fix__rotate"></div>
                            <div className="home__wrapper">
                                <div className="home__wrapper-info">
                                    <h4 className="text__info-decs">Create and animate voxel art. Export anywhere.</h4>
                                </div>
                            </div>
                        </li>
                        <li className="link__items set__height">
                            <div className="icon-card text__icon">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/shop-icon.svg" alt="logo" />
                                <h2 className="text__info text__icon-info"> Marketplace</h2>
                            </div>
                            <div className="background-rotate fix__rotate"></div>
                            <div className="home__wrapper">
                                <div className="home__wrapper-info">
                                    <h4 className="text__info-decs">One place to sell and collect the best ASSETS.</h4>
                                </div>
                            </div>
                        </li>
                        <li className="link__items set__height">
                            <div className="icon-card text__icon">
                                <img src="https://www.sandbox.game/img/02_Side_Bar/svg/create-icon.svg" alt="logo" />
                                <h2 className="text__info text__icon-info"> Game Maker</h2>
                            </div>
                            <div className="background-rotate fix__rotate"></div>
                            <div className="home__wrapper">
                                <div className="home__wrapper-info">
                                    <h4 className="text__info-decs">Make and Play any game that you can imagine.</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <h2 className="key__metrics">Key metrics(as of January, 2022)</h2>
                <div className="alyx__grid-table">
                    <div className="header__grid-table ">
                        <p className="main__text-grid">Ticket</p>
                        </div>
                    <div className="header__grid-table main__text-grid">
                        <p className="main__text-grid">Alyx</p>
                        </div>
                    <div className="sub__text-grid">Total Token Supply</div>
                    <div className="sub__text-grid">50,000,000 ALYX</div>
                    <div className="sub__text-grid">Binance Launchpad Sale Price</div>
                    <div className="sub__text-grid">0.0001238 UDS / ALYX</div>
                    <div className="sub__text-grid">Circulating Supply</div>
                    <div className="sub__text-grid">~20,000,000,000 ALYX</div>
                </div>
            </div>
        </div>
    )
  }
  
  export default AlyxContent