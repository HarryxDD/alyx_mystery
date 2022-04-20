import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import News from '../../News/News'

import './LatestArticles.css'

const LastestArticles = () => {
  return (
    <div className='comm__articles comm__padding'>
      <div className='articles__nav'>
        <div className='articles__nav-title'>
          Latest Articles
        </div>
        <div className='articles__nav-cate'>
          <button className='cate__btn'>All</button>
          <button className='cate__btn'>Updates</button>
          <button className='cate__btn'>Partnerships</button>
          <button className='cate__btn'>Announcements</button>
          <button className='cate__btn'>Blockchain</button>
        </div>
        <div className='articles__nav-readmore more-pls'>
          <p>Read more</p>
          <MdDoubleArrow />
        </div>
      </div>
      <div className='articles__news'>
      
        <News image="https://strapi.sandbox.game/uploads/1_s_Z5s_J_Svjh_L_Sfyq_Bwy_V4_KEQ_b9e3f4e1c0.jpg" category="ANNOUNCEMENTS" title="The Dragons of Planet Cambra — NFT Collection" date="Apr 09 - 5 min read"/>

        <News image="https://strapi.sandbox.game/uploads/1_75yz0_SK_Tx_R_Vgp_B_Cluxy22w_47a718ade7.jpg" category="ANNOUNCEMENTS" title="Shibuya LAND Sale" date="Apr 09 - 4 min read"/>

        <News image="https://strapi.sandbox.game/uploads/1_ZKC_Ypg_Sngw_Sw_XI_9_V4_Zt_JVQ_b6b907d95e.png" category="ANNOUNCEMENTS" title="Easter VoxEdit Contest" date="Apr 09 - 4 min read"/>
      </div>
    </div>
  )
}

export default LastestArticles