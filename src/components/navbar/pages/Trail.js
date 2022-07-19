import React from 'react'
import './trail.css'
import Typewriter from 'typewriter-effect';
import Explore from '../../explore/Explore';
const Trail = () => {
  return (
    <>
    
   <div className="maintrail">
   <div className='landing'>
        {/* <img src="https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /> */}
        <div className='landcontent'>
        <h1><Typewriter
        onInit={(typewriter)=>{
            typewriter.typeString("Hello player")
            .start()
            .pauseFor(1500)
            .deleteAll()
            .typeString("Hello Pro Player!!");
        }}
        /></h1>
        </div>
    </div>
   </div>
    </>
  )
}

export default Trail