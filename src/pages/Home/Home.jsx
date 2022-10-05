import React from 'react'
import Background from '../../Components/Background/Background'
import Header from '../../Components/Header/Header'
import {Link} from 'react-router-dom'
import './Home.css'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  return (
    <div className="homeWrapper">
        <Header/>
        <div className='main'>
            <div className='intro'>
                Hi, my name is
            </div>
            <div className='name'>
                Sanchit Srivastava
            </div>
            <div className='subHeading'>
                
            </div>
            <div className='link'>
                <Link to='/About'><p>See More About Me <span className='arrow'><HiArrowNarrowRight/></span></p></Link>
                <div className='margin'></div>
            </div>
        </div>
        <Background text = {'Hello, There'} />
    </div>
  )
}

export default Home