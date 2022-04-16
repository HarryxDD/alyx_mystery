import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import Lesson from './Lesson/Lesson'

import './Academy.css'

const Academy = () => {
  return (
    <div className='comm__academy comm__padding'>
      <div className='academy__nav'>
        <div className='academy__nav-title'>
          The Alyx Game Maker Academy
        </div>
        <div className='academy__nav-readmore more-pls'>
          <p>Read more</p>
          <MdDoubleArrow />
        </div>
      </div>
      <div className='academy__news'>

        <Lesson image="https://www.sandbox.game/img/27_About/gm-academy0.png" title="Welcome to The Sandbox GM Academy" desc="Learn how to Build and Share your experiences in the Metaverse using the Sandbox Game Maker."/>

        <Lesson image="https://www.sandbox.game/img/27_About/gm-academy1.png" title="What is the Game Maker?" desc="The program you use to build and then publish experiences within The Sandbox Metaverse."/>

        <Lesson image="https://www.sandbox.game/img/27_About/gm-academy2.png" title="What Can I Make?" desc="Some examples of experiences you can create using The Sandbox GM resources and tools."/>

      </div>
    </div>
  )
}

export default Academy