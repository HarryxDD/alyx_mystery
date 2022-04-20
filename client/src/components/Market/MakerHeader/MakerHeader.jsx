import React from 'react'
import './MakerHeader.css'
import { GrSearch } from "react-icons/gr";

const MakerHeader = () => {
  return (
    <div className="page__relative page__main">
        <div className="market__content">
            <div className="page__relative">
                <div className="market__search-container">
                    <div className="market__search-field">
                        <div className="tintable-image search__btn">
                            <p><GrSearch size="2rem" color="#a0a4a7"/></p>
                        </div>
                        <input type="text" placeholder="Search" autocomplete="off" className="search__input"/>
                    </div>
                </div>
                <div className="market__header">
                    <h1 className="market__header-tittle">
                        Welcome to the NFT Marketplace
                    </h1>
                    <p className="market__header-sub__tittle">
                        Here you can search and buy creator's ASSETS with SAND to 
                        incorporate them into your LAND
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakerHeader