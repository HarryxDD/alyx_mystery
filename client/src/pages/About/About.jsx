import React from 'react'
import { HeaderAbout, ContentAbout, AboutAlyx, TheSandBox } from '../../components'

import {
  Routes,
  Route,
} from 'react-router-dom';

import './About.css'

const About = () => {
    return (

      <div className='app__about'>
          <HeaderAbout/>
          <ContentAbout/>
          <Routes>
            <Route exact path='/' element={<TheSandBox />}/>
            <Route  path='/coin' element={<AboutAlyx />}/>
          </Routes>            
      </div>
    )
  }
  
  export default About