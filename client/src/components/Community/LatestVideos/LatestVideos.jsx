import React from 'react'
import { MdDoubleArrow, MdPlayArrow, MdPlayCircle } from 'react-icons/md'

import './LatestVideos.css'

const LatestVideos = () => {
  return (
    <div className='comm__videos comm__padding'>
      <div className='videos__stream'>
        <div className='videos__nav'>
          <div className='videos__nav-title'>
            Streaming
          </div>
          <div className='videos__stream-readmore more-pls'>
            <p>View more</p>
            <MdDoubleArrow />
          </div>
        </div>
        <div className='stream__content'>
          <img src="https://thebridge.in/wp-content/uploads/2020/06/Dota-2.png" alt="" />
          <div className='stream__area'>
            <div className='stream__desc'>
              <p className='desc__text'><span>TheAlyxGame</span> is offline.</p>
              <p className='desc__text'>Learn more about them on their channel!</p>
              <div className='stream__link'>
                <MdPlayArrow />
                <p>Visit TheAlyxGame</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='videos__latest'>
        <div className='videos__nav'>
          <div className='videos__nav-title'>
            Latest Videos
          </div>
          <div className='videos__latest-readmore more-pls'>
            <p>View more</p>
            <MdDoubleArrow />
          </div>
        </div>
        <div className='video__content'>
          <div className="latest__video">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtNPLxlCvY0F9ZtZj2AboeomWGN8fBgd5XQ&usqp=CAU" alt="" />
            <MdPlayCircle />
          </div>
          <div className='latest__video'>
            <img src="https://image.thanhnien.vn/w1024/Uploaded/2022/fsmym/2021_05_31/game-moba-dota-2-bay-gio-ra-sao03_jpsn.jpg" alt="" />
            <MdPlayCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestVideos