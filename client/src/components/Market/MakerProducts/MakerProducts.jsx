import React from 'react'
import './MakerProducts.css'
import {BsChevronDown} from "@react-icons/all-files/bs/BsChevronDown"

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
                <div className="list__drop-btn square">
                  <p> Newest  </p>
                  <p className="list__icon-up"><BsChevronDown fontSize="1.3rem" strokeWidth="2"/></p>
                </div>
                <div className="list__drop square">
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
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/e8566ec5-3a02-40f8-97d9-0d3220654876/preview?bafkreih5mchbcnuz475hnakul3uqyvfls42lqhlunbu26ceyl3gybs3xqe" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Green Bells - LuluSneaker - Lululand
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/fd44f14d-3b53-48be-a149-0a6f5825200c/preview?bafkreihlj5akz6za7qexr3pqoraku2z7xczs3tevass6yhrpzweuqircxu" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          A.L.F.R.E.D
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/9a13a2bb-829c-48a1-aa45-855684b1e362/preview?bafkreihnvkhysqq3x2suefnyl5oticzycnzihk2z2m6llhnludywxp3ffq" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Sir of the Ether
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card">
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
                <div className="add__cart">
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
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/e8566ec5-3a02-40f8-97d9-0d3220654876/preview?bafkreih5mchbcnuz475hnakul3uqyvfls42lqhlunbu26ceyl3gybs3xqe" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Green Bells - LuluSneaker - Lululand
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/fd44f14d-3b53-48be-a149-0a6f5825200c/preview?bafkreihlj5akz6za7qexr3pqoraku2z7xczs3tevass6yhrpzweuqircxu" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          A.L.F.R.E.D
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/9a13a2bb-829c-48a1-aa45-855684b1e362/preview?bafkreihnvkhysqq3x2suefnyl5oticzycnzihk2z2m6llhnludywxp3ffq" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Sir of the Ether
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card">
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
                <div className="add__cart">
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
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/e8566ec5-3a02-40f8-97d9-0d3220654876/preview?bafkreih5mchbcnuz475hnakul3uqyvfls42lqhlunbu26ceyl3gybs3xqe" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Green Bells - LuluSneaker - Lululand
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/a-l-f-r-e-d/fd44f14d-3b53-48be-a149-0a6f5825200c/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/fd44f14d-3b53-48be-a149-0a6f5825200c/preview?bafkreihlj5akz6za7qexr3pqoraku2z7xczs3tevass6yhrpzweuqircxu" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          A.L.F.R.E.D
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/-green-bells-lulusneaker-lululand/e8566ec5-3a02-40f8-97d9-0d3220654876/" className="products__card">
                  <div className="products__card-hover rare"></div>
                  <div className="card__top">
                    <figure>
                      <img className="card__preview" src="https://api.sandbox.game/assets/public/9a13a2bb-829c-48a1-aa45-855684b1e362/preview?bafkreihnvkhysqq3x2suefnyl5oticzycnzihk2z2m6llhnludywxp3ffq" alt="preview" />
                    </figure>
                    </div>
                  <div className="card__bottom">
                      <div className="card__bottom-tittle">
                        <p className="card__name"> 
                          Sir of the Ether
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
                <div className="add__cart">
                  <div className="add__cart-icon"></div>
                </div>
              </div>
              <div className="page__relative">
                <a href="https://www.sandbox.game/en/assets/everdreamsoft-bearwhale/0fe568bf-54e0-474e-99f9-84d0b7693b98/" className="products__card">
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
                <div className="add__cart">
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