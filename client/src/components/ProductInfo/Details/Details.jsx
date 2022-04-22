import React from 'react'

import './Details.css';
import images from '../../../constants/images';

const Details = () => {
  return (
    <div className='product__details'>
        <div className='product__title'>
            <div><h1>Charizard Mega X Holo 3D</h1></div>

            <div className='product__token__id'>
                <p className='token__id'>Token ID: 6942...2904</p>

                <a href='https://youtu.be/m9sGLeR7R_s' target='_blank' className='copy__icon'><img src='https://www.sandbox.game/img/00_General/copy-link-icon.svg'></img></a>
            </div>

            <div className='product__cond'>
                <img src='https://www.sandbox.game/img/07_Asset_Info/Icon_mint.svg'></img>
                
                <p>200 minted</p>

                <div className='vertical__line'></div>

                <img src='https://www.sandbox.game/img/07_Asset_Info/Icon_tag.svg' className='info__icon'></img>

                <p>100 of 100 for sale</p>

                <div className='vertical__line'></div>

                <img src='https://www.sandbox.game/img/07_Asset_Info/Icon-owners.svg' className='info__icon'></img>

                <p>3 owners</p>
            </div>
        </div>

        <div className='product__about'>
          <h2>About</h2>

            <div className='card'>
              <div className='info__container'>
                <h5>TYPE</h5>

                <div className='type__container'>
                  <div><img src='https://archives.bulbagarden.net/media/upload/9/93/Bag_Pok%C3%A9_Ball_Sprite.png' className='pokeball'></img></div>

                  <p>Pokemon</p>
                </div>
              </div>

              <div className='info__container'>
                <h5>BIOMES</h5>
                <p>Mountains</p>
              </div>

              <div className='info__container'>
                <h5>TAGS</h5>

                <div className='tag__list'>
                  <div><p>Fire</p></div>
                  <div><p>Dragon</p></div>
                  <div><p>OverUsed</p></div>
                  <div><p>Attacker</p></div>
                </div>
              </div>
            </div>
          
        </div>

          <div className='product__attribute'>
            <h2>Attributes</h2>

            <div className='card__attribute'>
              <div className='luxury__ball'><img src='https://archives.bulbagarden.net/media/upload/8/87/Bag_Luxury_Ball_Sprite.png'/> </div>
              <div className='rarity__box'>
                  <p>Catalyst</p>
                  <h5>Rare</h5>
              </div>
              
              <div className='stats__view'>
                <div className='info__container'>
                <h4>ATTACK</h4>

                <div className='stat__container'>
                  <img src={images.attack}className='attr__picture'/>

                  <h4>130</h4>
                </div>
                </div>

                <div className='info__container'>
                <h4>DEFENSE</h4>

                <div className='stat__container'>
                  <img src={images.defense} className='attr__picture'/>

                  <h4>111</h4>
                </div>
                </div>

                <div className='info__container'>
                <h4>SPEED</h4>
                
                <div className='stat__container'>
                  <img src={images.speed}className='attr__picture'/>

                  <h4>100</h4>
                </div>
                </div>
              </div>
            </div>
          </div>

        <div className='product__desc'>
            <h2>Description</h2>
            <p>Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. The overwhelming power that fills its entire body causes it to turn black and create intense blue flames.</p>
        </div>

        <div className='share__social'>
          <div><p className='share'>Share in:</p></div>

          <a href='https://www.facebook.com/profile.php?id=100028954895933' target='_blank'><img src='https://www.sandbox.game/img/07_Asset_Info/facebook-icon.svg'/></a>

          <a href='https://www.youtube.com/watch?v=pYFCsri1K2M' target='_blank'><img src='https://www.sandbox.game/img/07_Asset_Info/twitter-icon.svg'/></a>
        </div>

        <div className='creator__card'>
          <div className='creator__container'>
            <img src={images.amogus}/>

            <div>
              <h4>CREATED BY</h4>
              <a class="user__profile" href="https://www.youtube.com/watch?v=grd-K33tOSM" target="_blank">@Amogus</a>
            </div>
          </div>

          <div className='nft__container'>
            <div className='nft__container__title'>
              <h4>NFT from creator</h4>
              <a class="user__profile" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">See more...</a>
            </div>

            <div className='wrapper__grid'>
              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__legend'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src={images.arcanine}/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Rayquaza 2D Sprite</h3>
                          <p className='legendary'>Legendary</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__legend'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src={images.jirachi}/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Jirachi 2D Mythical</h3>
                          <p className='mythical'>Mythical</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__legend'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src={images.karp_shiny}/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Shiny Magikarp</h3>
                          <p className='legendary'>Legendary</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__rare'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src={images.dragoon}/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Magma Dragoon 2D Holo</h3>
                          <p className='holo'>Rare</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__common'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src='https://static.wikia.nocookie.net/among-us-wiki/images/3/31/Red.png'/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Red Impostor Sussy</h3>
                          <p className='common'>Common</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className='is__relative'>
                <div className='listed__card'>
                  <div className='hover__bg__common'></div>
                    <div className='other__products'>
                      <div className='preview__small'> <img src={images.shuckle}/></div>

                      <div className='info__mini'>
                        <div className='info__data'>
                          <h3>Shuckle 2D Common</h3>
                          <p className='common'>Common</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='create__asset__guide'>
          <h2>Creating an Asset</h2>

          <div className='text__bullet'>
            <img src={images.bullet}/>

            <p className='text'>When a creator designs an asset, they have to distribute points amongst the chosen attributes.</p>
          </div>

          <div className='text__bullet'>
            <img src={images.bullet}/>

            <p className='text'>A creator can change the amount of attributes while creating an asset.</p>
          </div>

          <div className='text__bullet'>
            <img src={images.bullet}/>

            <p className='text'>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</p>
          </div>
          
        </div>

        <div className='benefit__list'>
          <div className='card__info__left'>
            <div className='text__container'>
              <h2>Player side</h2>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Attributes give bonuses within a game</p>
              </div>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Not having an attribute does not prevent from playing</p>
              </div>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Games display used attributes in their description</p>
              </div>
            </div>
          </div>

          <div className='card__info__right'>
            <div className='text__container'>
              <h2>Creator side</h2>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Game mechanics come with attribute presets</p>
              </div>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Assets need the required attributes to be used with a game mechanism</p>
              </div>

              <div className='text__bullet'>
                <img src={images.bullet}/>

                <p className='text'>Creators can modify the attributes required by a game mechanic</p>
              </div>
            </div>
          </div>
        </div>

        <div className='create__asset__guide'>
          <p className='text'>This system remains flexible both for creators (allows them to tweak their game at will) and for players (not restricting game access, but giving more or less bonuses).</p>
        </div>
    </div>
  )
}

export default Details