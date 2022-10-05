import React from 'react'
import Background from '../../Components/Background/Background'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import './Blog.css'
import BlogData from '../../data/blogData'


const Blog = () => {
  return (
    <div className='homeWrapper'>
        <Header/>
        <div className='main' style={{padding: '0rem 10rem'}}>
            <div className='name'>My Blogs</div>
            <div className='projectWrapper'>
                
                <div className='projectCardWrapper'>
                    {
                        BlogData.map((data, idx)=>{
                            return(
                                <Link to={`/content?id=${data.id}`} key={idx} >
                                    <div role='gridcell' id='idx' className='card' tabIndex={0} style={{padding: '10rem 2rem'}}>
                                        <img src={data.img} alt="" />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>
        <div></div>
        <Background text={'Blog'}/>
    </div>
  )
}

export default Blog