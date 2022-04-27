import React from 'react'
import './MakerProducts.css'
import { BsChevronDown } from "react-icons/bs/"

const MakerProducts = () => {
  return (
    <div className="maker__products">
        <div className="maker__products-fit">
          <div className="filter__options page__relative">
            <div className="sort__by-filter">
              <div className="sort__by-tittle">
                <p>Sort by</p>
              </div>
              <div className="sort__by-down page__relative">
                <div className="list__drop-btn square__list-items">
                  <p> Newest  </p>
                  <p className="list__icon-up"><BsChevronDown fontSize="1.3rem" strokeWidth="2"/></p>
                </div>
                <div className="list__drop square__list-items">
                  <ul className="list__drop-list">
                    <li> Name (A-Z) </li>
                    <li> Name (Z-A) </li>
                    <li> Oldest </li>
                    <li> Lowest price (A-Z) </li>
                    <li> Highest price (A-Z) </li>
                    <li> Least amount </li>
                    <li> Highest amount (A-Z) </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products__filter">
          <div className="marker__products-container">
            <h3 className="products__tittle">NFTs for sale</h3>
            <hr className="horizontal__light"/>
            <p className="count__products"> 4 results</p>
            <div className="products__wrapper mt__wrapper">
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card common__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5b/Creeper_JE2_BE1.png" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Creeper Common
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 20 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 13.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 39.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card rare__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_034.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Nidoking 2D Rare
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 12 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 35.4 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 94.6</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card elite__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_383.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Groudon Gen V Legendary
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 10 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 135.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 394.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card legend__item ">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://www.pokencyclopedia.info/sprites/gen5/ani_black-white_shiny/ani_bw-S_384.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Rayquaza Shiny Gen V
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 04 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 356.75 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 994.23</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="marker__products-container">
            <h3 className="products__tittle mt-3">NFTs Entities</h3>
            <hr className="horizontal__light"/>
            <p className="count__products"> 4 results</p>
            <div className="products__wrapper mt__wrapper">
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card legend__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/international2016/battle_pass/hero_images/jugg_tout_gold.png" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Golden Fortune's Tout
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 02 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 535.15 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 1594.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card rare__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://vgraphs.com/images/weapons/skins/full-details/valorant-ego-knife-variant-2-tan-weapon-skin.png" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          E.G.O Knife
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 30 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 65.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 184.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card common__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_082.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Magneton Gen V
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 100 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 5.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 14.75 </p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card rare__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/0fe568bf-54e0-474e-99f9-84d0b7693b98/preview?bafkreigeyekbvbhyslnhmwwgzln4nkzzyivp5gclqhzcc6glvphav3egha" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          EverdreamSoft: Bearwhale
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 40 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 75.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 274.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="marker__products-container">
            <h3 className="products__tittle mt-3">NFTs Lands on Opensea</h3>
            <hr className="horizontal__light"/>
            <p className="count__products"> All LANDS listed here are sold directly by 
            other users on OpenSea with SAND set as the currency. All displayed prices
             are set by users directly and not linked to The Sandbox’s primary LAND 
             sales. If you want to have your LAND visible here, please list it on 
            OpenSea.io and set SAND as the currency</p>
            <div className="products__wrapper mt__wrapper">
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card elite__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://csgostash.com/storage/img/skin_sideview/s1284.png" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Desert Eagle - PrintStream
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 5 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 1005.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 3094.126</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card legend__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_metalic_green_light_large.80a800c0b681384b0227d4125cd21c4e4df0469c.png" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Broken Fang Gloves - Jade
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 07 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 345.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 982.12</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card legend__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://i.pinimg.com/originals/28/32/83/28328366be8cdcbb66b9b90fd4c2126c.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Vileplume Gen VI
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 172 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 15.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 45.26</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card common__item">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://www.smogon.com/dex/media/sprites/xy/corviknight.gif" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Corviknight Gen VIII
                        </p>
                      </div>
                      <div className="card__bottom-data">
                        <div>
                          <p className="supply__count">
                            <span className="supply__count-text"> 20 / 200</span>
                          </p>
                        </div>
                        <div className="card__price mt-2">
                          <div className="card__price-igr">
                            <div>
                              <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="coin-icon" />
                            </div>
                            <div>
                              <span className="price__number"> 135.45 </span>
                              <div className="price__number-money">
                                <p className="price__number-usd"> 394.16</p>
                                <p className="price__usd">USD</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </a>
                <div className="add__cart-img">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MakerProducts