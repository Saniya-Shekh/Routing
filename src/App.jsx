import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
    </div>
  )
}

export default App
