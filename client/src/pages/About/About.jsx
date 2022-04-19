import React from 'react'
import { HeaderAbout, ContentAbout, AboutAlyx, Partner, TheSandBox } from '../../components'
import './About.css'

const About = () => {
    return (
      <div className='app__about'>
          <HeaderAbout/>
          <ContentAbout/>
          {/* <TheSandBox/> */}
          <AboutAlyx/>
          {/* <Partner /> */}
      </div>
    )
  }
  
  export default About