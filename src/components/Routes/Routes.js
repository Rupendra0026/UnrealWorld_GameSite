import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import About from '../navbar/pages/about/About.js';
import Contactus from '../navbar/pages/contactus/Contactus.js';
import Testimonials from '../navbar/pages/testimonials/Testimonials.js';
import Home from '../navbar/pages/Home.js';
import Error from '../navbar/pages/Error.js';
import MainNav from '../navbar/pages/MainNav.js';

function RouteAdd() {
 return (
  <>
 <div>
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/UnrealWorld_GameSite' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/testimonials' element={<Testimonials/>}/>
    <Route path='*' element={<Error/>}></Route>
  </Routes>
  </BrowserRouter>
 </div>
  </>
 );

};

export default RouteAdd;
