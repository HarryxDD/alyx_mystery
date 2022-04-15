import React from 'react'
import { HeaderAbout, ContentAbout, Partner, TheSandBox } from '../../components'
import './About.css'

const About = () => {
    return (
      <div className='app__about'>
          <HeaderAbout/>
          <ContentAbout/>
          <TheSandBox/>
          {/* <Partner /> */}
      </div>
    )
  }
  
  export default About