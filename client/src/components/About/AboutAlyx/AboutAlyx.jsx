import React from 'react'
import { AboutAlyxHeader, AlyxAvailable, CurrentProduct, KeyMetrics } from '../../../components'
import './AboutAlyx.css'

const AboutAlyx = () => {
    return (

        <div className="app__alyx-content">
            <div className="app__about-alyx page__main">
                <div className="alyx__content alyx__sb-container">
                    <AboutAlyxHeader/>
                    <AlyxAvailable/>
                </div>
            </div>
        </div>
    )
  }
  
  export default AboutAlyx