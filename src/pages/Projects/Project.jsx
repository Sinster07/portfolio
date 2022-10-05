import React from 'react'
import Header from '../../Components/Header/Header'
import './Project.css'

import Background from '../../Components/Background/Background'
import ProjectData from '../../data/projects'

//const image = ('../../assets/')

const Project = () => {
  return (
    <div className='homeWrapper'>
        <Header/>
        <div className='main' style={{padding:'0rem 10rem'}}>
            <div className='name'>Projects.</div>
            <div className='projectWrapper'>
                
                <div className='projectCardWrapper'>
                    {
                        ProjectData.map((data, idx)=>{
                            return(
                                <div role='gridcell' id='idx' className='card' tabIndex={0} style={{padding: '10rem 2rem', backgroundImage:`url(${data.img})`}} key={idx } >
                                    {/* <img src={  (image+'pro1.gif') } alt="require fails" /> */}
                                    <div className='proBtn'>
                                        <a href={data.github}><button>Github</button></a>
                                        <a href={data.live}><button>Live Site</button></a>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
        <Background text={'Project'}/>
    </div>
  )
}

export default Project