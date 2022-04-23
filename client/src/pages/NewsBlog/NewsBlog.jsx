import React from 'react'

import './NewsBlog.css'
import images from '../../constants/images';

const NewsBlog = () => {
  return (
    <div>
        <div className='page__content'>
            <p className='main__page'>
                <div className='article__share'>
                    <p>SHARE</p>
                    <div>
                        <a><img src={images.telegram_clear}/></a>
                        <a><img src={images.twitter_clear}/></a>
                        <a><img src={images.facebook_clear}/></a>
                    </div>
                </div>

                <div className='article__details'>
                    <div className='article__details__contents'>
                        <p className="date">Apr 20 - 6.9 min read</p>
                        <h5 className="category">Announcements</h5>

                        <h1 className="title">CEO Of ALyx Is Annoucing ALyx 2.0</h1>

                        <div className='active__post'>
                            <p className='sub__title'>We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy...</p>

                            <br/>

                            <p><img src="https://i.ytimg.com/vi/ZESfXCKZIMs/maxresdefault.jpg" height="394" with="700" className='article__img'/></p>

                            <br/>
                            <br/>

                            <h1 className='title__2'>TL;DR:</h1>

                            <ul className='desc'>
                                <li>Cock and ball torture (CBT), occasionally known as penis torture, dick torture, or male genitorture/male genital torture, is a sexual activity involving the application of pain or constriction to the penis or testicles.</li>

                                <li>This may involve directly painful activities, such as genital piercing, wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation, kneeing or kicking. </li>

                                <li>The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.</li>

                                <li>Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.</li>

                                <li>Yo mama's so fat, when she goes camping, the bears hide their food.</li>
                            </ul>

                            <br/>

                            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id leo eros. Etiam eros massa, vestibulum sed nisi ut, vulputate pretium neque. Cras vitae quam pulvinar, molestie dolor eu, gravida mi. Cras vitae est a urna euismod pharetra. Ut tempor in quam vel aliquet.</p>

                            <p><br/></p>

                            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <p><br/></p>

                            <h1 className='title__3'>You know Joe?</h1>

                            <br/>

                            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id leo eros. Etiam eros massa, vestibulum sed nisi ut, vulputate pretium neque. Cras vitae quam pulvinar, molestie dolor eu, gravida mi. Cras vitae est a urna euismod pharetra. Ut tempor in quam vel aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id leo eros. Etiam eros massa, vestibulum sed nisi ut, vulputate pretium neque. Cras vitae quam pulvinar, molestie dolor eu, gravida mi. Cras vitae est a urna euismod pharetra. Ut tempor in quam vel aliquet.</p>

                            <br/>

                            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id leo eros. Etiam eros massa, vestibulum sed nisi ut, vulputate pretium neque. Cras vitae quam pulvinar, molestie dolor eu, gravida mi. Cras vitae est a urna euismod pharetra. Ut tempor in quam vel aliquet.</p>

                            <br/>

                            <h1 className='title__3'>Never Going To Give You Up</h1>

                            <br/>

                            <img src={images.sussy} height="auto" width="700" className='article__img'/>

                            <br/>

                            <p className='desc'>Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you</p>

                            <br/>

                            <h1 className='title__3'>Never Going To Give You Up</h1>

                            <br/>

                            <p className='desc'>Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you</p>
                        </div>
                    </div>

                    <div className='related__articles'>
                        <div>
                            <div className='custom__header'>
                                <h3>Related Articles</h3>

                                <a href='https://www.youtube.com/watch?v=Gm_T0rEzelI' target='_blank'><h3>Read More...</h3></a>
                            </div>

                            <div className='details__related'>
                                <div className='related__item'>
                                    <img src={images.brotherhood}/>

                                    <div className='related__item__details'>
                                        <p className="category">Announcements</p>
                                        <h2> Eleanor Rigby, picks up the rice in the church...</h2>

                                        <div className='related__item__metas'>
                                            <div>Apr 09 - 4 min read</div>

                                            <hr className='line'/>

                                            <div className='social__links'>
                                                <a><img src={images.telegram_clear}/></a>
                                                <a><img src={images.twitter_clear}/></a>
                                                <a><img src={images.facebook_clear}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='related__item'>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/9b31369bd6f6b1fa85fe08fa6cd34338adc5b58b.jpg"/>

                                    <div className='related__item__details'>
                                        <p className="category">Announcements</p>
                                        <h2> Yo mama's so stupid, when I said, "Drinks on the house," she got a ladder...</h2>

                                        <div className='related__item__metas'>
                                            <div>Mar 19 - 2 min read</div>

                                            <hr className='line'/>

                                            <div className='social__links'>
                                                <a><img src={images.telegram_clear}/></a>
                                                <a><img src={images.twitter_clear}/></a>
                                                <a><img src={images.facebook_clear}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='related__item'>
                                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/1046930/capsule_616x353.jpg"/>

                                    <div className='related__item__details'>
                                        <p className="category">Announcements</p>
                                        <h2> Rick Astley Gave You Up...</h2>

                                        <div className='related__item__metas'>
                                            <div>Dec 04 - 4 min read</div>

                                            <hr className='line'/>

                                            <div className='social__links'>
                                                <a><img src={images.telegram_clear}/></a>
                                                <a><img src={images.twitter_clear}/></a>
                                                <a><img src={images.facebook_clear}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='article__right'>
                    
                        <div className='article__newsletter'>
                            <div className='article__email'><img src={images.email}/></div>

                            <p className="newsletter__title">Newsletter</p>

                            <p className="newsletter__details">
                                Enter your email adress below to subscribe to ALYX's newsletter
                            </p>

                            <button className="is-text-bold">Subscribe</button>
                        </div>

                        <div className='article__latest'>
                            <h4>Latest Articles</h4>

                            <div>
                                <div>
                                    <div className="small__article">
                                        <img src={images.amogus}/>

                                        <div>
                                            <h5>Sussus Amogus - Return Of The King</h5>
                                            <p>Sept 11 - 3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="small__article">
                                        <img src={images.amogus}/>

                                        <div>
                                            <h5>The N-word Pass Is Avaiable!</h5>
                                            <p>Yesterday - 3 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="small__article">
                                        <img src={images.amogus}/>

                                        <div>
                                            <h5>Steve Jobs Died Because Of Ligma</h5>
                                            <p>April 1 - 5 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="small__article">
                                        <img src={images.amogus}/>

                                        <div>
                                            <h5>Amogus Is Good, Get The Game</h5>
                                            <p>2 days ago - 5 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </p>
        </div>
    </div>
  )
}

export default NewsBlog