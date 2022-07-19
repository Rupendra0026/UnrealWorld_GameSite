import React from 'react'
import './gamesetup.css'
import Gamesetupdata from './Gamesetupdata'
const Gamesetup = () => {
  return (
    <>
    <div className="gamesetup">
        <div className="gamesetuphead">
            <h1>planing for gaming setup?? then these are must!</h1>
        </div>
        <div className="gamesetupcard">
            <div className="gamesetupimg">
                {
                    Gamesetupdata.map((val)=>{
                        return(
                            <>
                            <img src={val.img} alt="" />
                            <h1>{val.name}</h1>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Gamesetup