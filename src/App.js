import React from 'react'
import MainNav from './components/navbar/pages/MainNav.js';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import About from './components/navbar/pages/about/About'
import Contactus from './components/navbar/pages/contactus/Contactus'
import Testimonials from './components/navbar/pages/testimonials/Testimonials'
import Home from './components/navbar/pages/Home'
import Error from './components/navbar/pages/Error.js';
import ReactAdd from './components/Routes/Routes'
import Explore from './components/explore/Explore.js';
import Trail from './components/navbar/pages/Trail.js';

function App() {
 return (
  <>
<ReactAdd/>
  </>
 );

};

export default App;
