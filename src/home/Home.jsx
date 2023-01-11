import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutRouter from '../layout/LayoutRouter'

const Home = () => {
  return <LayoutRouter  content = {<Outlet/>} />
}

export default Home;