import React from 'react'
import MainNav from './MainNav'
import Trail from './Trail'
import Explore from '../../explore/Explore'
import Pagination from '../../Gamedata_api/Pagination'
import Listofgames from '../../Gamedata_api/Listofgames'
import Gamesetup from '../../Gamesetup/Gamesetup'
import Footer from '../../Footer/Footer'
// import { Pagination } from '@mui/material'

const Home = () => {
  return (
    <div>
        <MainNav/>
        <Trail />
        <Explore/>
        <Listofgames/>
        <Footer/>
        {/* <Gamesetup/> */}
    </div>
    
  )
}

export default Home