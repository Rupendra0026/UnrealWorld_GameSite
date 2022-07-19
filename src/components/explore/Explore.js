import React from 'react'
import './explore.css'
import Typewriter from 'typewriter-effect';
import Exploredata from './Exploredata'


const Explore = () => {
  return (
    <>
    <div className='gamesetup'>
      <div className='explore'> 
      <h1>Are you ready with the setup?</h1>
    </div>
    </div>
    <div className="setup">
    {
          Exploredata.map((imgurl,key)=>{
            return(
              <>
              <div className="explorecard" id={key}>
      <div className="exploreimg">
        <img src={imgurl.image} alt="" />
        {/* <h6>{imgurl.os}</h6> */}
      </div>
    </div>
              </>
            )
          })
        }
    </div>
    </>
  )
}

export default Explore