import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


import Contact from './component/CONTACT/Contact';
import Aboutpage from './component/ABOUT PAGE/Aboutpage'
import Education from './component/RESUME/education.jsx'
import Skills from './component/SKILLS/skills.jsx'


function App() {

  return (
    <>

    
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
            <li><NavLink to="/Education">EDUCATION</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/Skills">SKILLS</NavLink></li>
          </ul>
          <ul>
            <li><NavLink to="/Contact" >CONTACT</NavLink></li>
          </ul>
          </div>

          <div className="NAVBAR2">

            <Routes>
              <Route path="/" index element={<Aboutpage />} />
              <Route path="/Education" element={<Education />} />
              <Route path='/Skills' element={<Skills/>}/>
              <Route path="/Contact" element={<Contact />} />

              

            </Routes>

          </div>

        </BrowserRouter>
        


      </div>



    </>
  )
}
export default App

