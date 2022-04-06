import React from 'react'
import { News } from '../index'
import { data } from '../../constants'

import { MdDoubleArrow } from 'react-icons/md'

import './Newsfeed.css'

const Newsfeed = () => {
  return (
    <div className='app__news'>
        <div className='app__news-community section__padding'>
            <div className='app__news-community_title'>
                <div className='community__title'>
                    <p className='text__category'>COMMUNITY</p>
                    <h1 className='text__title'>WHAT'S NEW</h1>
                </div>
                <div className='community__explore'>
                    <p>Read more</p>
                    <MdDoubleArrow />
                </div>
            </div>
            <div className='community__news'>
    
                {data.news.map((n, index) => (
                    <News key={n.title + index} image={n.image} category={n.category} title={n.title} date={n.date}/>
                ))}
                
            </div>
            
        </div>
        <div className='app__news-survey section__padding'>
            <p className='text__category'>COMPLETE THE SURVEY</p>
            <h1 className='text__title'>EARN AN ALX COIN</h1>
        </div>
        <div className='app__news-info section__padding'>
            <p className='text__category'>ALPHA SEASON 2</p>
            <h1 className='text__title'>Deptraicogisai</h1>
        </div>
    </div>
  )
}

export default Newsfeed