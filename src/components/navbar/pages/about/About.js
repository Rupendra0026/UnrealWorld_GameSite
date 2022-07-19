import React from 'react'
import MainNav from '../MainNav'
import Typewriter from 'typewriter-effect';
import './about.css'
const About = () => {
  return (
    <div>
        <MainNav/>
        <div className="about">
          <div className="maincontent">
          <div className="aboutcontent">
            <Typewriter
            onInit={(typewriter)=>{
              typewriter
              .typeString("<h1>Want to know more about gaming??</h1>")
              .start()
              .typeString("<h2>want to know more about the new trending games?</h2>").start()
              .typeString("<h2>Confused by all the reviews...,have a look here</h2>").start()
              .typeString("<h2>got stuck in the installation process??</h2>")
              .pause(3000)
              .start()
              .deleteAll()
              .typeString("<h1>just explore through unreal world site</h1>")
              .typeString("<h1>THANK YOU</h1>")
            }}
             />
          </div>
          </div>
        </div>
        </div>
  )
}

export default About