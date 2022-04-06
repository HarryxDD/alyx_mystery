import React from 'react'
import { Header, Newsfeed, Lookback, Partner } from '../../components'

import './Home.css'

const Home = () => {
  return (
    <div className='app__homepage'>
        <Header />
        <Newsfeed />
        <Lookback />
        <Partner />
    </div>
  )
}

export default Home