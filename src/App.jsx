
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


// import Home from './component/PROJECTS/Projects';
import Contact from './component/CONTACT/Contact';
// import Resume from './component/ABOUT PAGE/Aboutpage';
import Aboutpage from './component/ABOUT PAGE/Aboutpage'
import Projects from './component/PROJECTS/Projects'
import RESUME from './component/RESUME/Resume.jsx'



function App() {

  return (
    <>
    {/* <RESUME/> */}
    
      <div className="MAINNAVBAR">
        
        <BrowserRouter>

        <div className="MAIN1">
          <div className="TITLE">
          <div className="name">JAYASURYA / REACT.JS DEVELOPER</div>
 
          </div>


          <ul>
            <li><NavLink index to="/"> ABOUT ME </NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/RESUME">EDUCATION</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/Projects">SKILLS</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/Contact" >CONTACT</NavLink></li>
          </ul>
          </div>

          <div className="NAVBAR2">

            <Routes>
              <Route path="/" index element={<Aboutpage />} />
              <Route path="/RESUME" element={<RESUME />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />

              

            </Routes>

          </div>

        </BrowserRouter>
        


      </div>



    </>
  )
}
export default App

