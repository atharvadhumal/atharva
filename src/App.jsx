import React from 'react'
import Home from './components/Home/Home'
import MainLayout from './layout/MainLayout'
import About from './components/About/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'


import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements, Routes } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/resume' element={<Resume/>} />
    <Route path='/contact' element={<Contact/>} />

  </Route>
    
  )
);

const App = () => {
  return <RouterProvider router={router}/>
} 

export default App