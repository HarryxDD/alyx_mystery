import React from 'react'
import { Navigation, LatestPost, LatestArticles, LatestVideos, Academy, Highlights, Social  } from '../../components'

import './Community.css'

const Community = () => {
  return (
    <div className='app__community'>
        <Navigation />
        <LatestPost />
        <LatestArticles />
        <LatestVideos />
        <Academy />
        <Highlights />
        <Social />
    </div>
  )
}

export default Community