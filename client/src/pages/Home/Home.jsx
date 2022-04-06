import React from 'react'
import { Header, Newsfeed } from '../../components'

import './Home.css'

const Home = () => {
  return (
    <div className='app__homepage'>
        <Header />
        <Newsfeed />
    </div>
  )
}

export default Home