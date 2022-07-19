import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Home'
// import {NavHashLink as Link} from 'react-router-hash-link';
import './Navbar.css'
import WidgetsIcon from '@mui/icons-material/Widgets';
const MainNav = () => {
  const[ismobile,setIsmobile]=useState(false);
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <Link to='/' className='navhome'><h3>Unreal World</h3></Link>
        </div>
        <div className="navcheck" id={ismobile ?"hidden":""}>
        <div className="navlist" id={ismobile ?"hidden":""}>
            <ul>
                <Link to='/' className='Navhome'><li>home</li></Link>
                <Link to='/about' className='Navabout'><li>about</li></Link>
                <Link to='/Contactus' className='Navabout'><li>Contactus</li></Link>
                {/* <Link to='/Testimonials' className='Navtestimonials'><li>testimonials</li></Link> */}
            </ul>
        </div>
        </div>
        <div className='Togglebtn' id={ismobile ?"hidden":""}>
        <button onClick={()=>setIsmobile(!ismobile)}><WidgetsIcon /></button>
        </div>
    </div>
  
    </>
  )
}

export default MainNav