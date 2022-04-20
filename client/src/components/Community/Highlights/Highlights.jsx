import React from 'react'
import News from '../../News/News'
import './Highlights.css'

const Highlights = () => {
  return (
    <div className='comm__highlight comm__padding'>
      <div className='highlight__nav'>
        <div className='highlight__nav-title'>
          Highlights
        </div>
      </div>
      <div className='highlight__news'>

        {/* <News image="https://strapi.sandbox.game/uploads/1_a_F_Nq_P3q_X1_ME_Chek6xa_N_Td_A_1b99396f90.jpg" category="LAND SALES" title="The Metavex District LAND Sale" date="Apr 09 - 4 min read"/> */}

        <News image="https://strapi.sandbox.game/uploads/0_4c021ff78a.png" category="GAME JAMS" title="The Alyxbox Game Jam — “A Glitch in the Metaverse” (300,000 ALYX + LANDS in Prizes)!" date="Jan 03 - 0 min read"/>

      </div>
    </div>
  )
}

export default Highlights