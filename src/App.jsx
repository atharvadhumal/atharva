import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'

const App = () => {
  return (
    <>
      
      
        <Navbar />
        <Home />
                            


    </>
  )
}

export default App