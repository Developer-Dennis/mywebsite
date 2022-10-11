import React from 'react'
import './navbar.css';
import {  Link } from "react-router-dom";
import Home from '../home/home.js';
import Homestyles from '../home/home.css';
import Services from '../services/services.js';
import Servicesstyles from '../services/services.css';
import About from '../aboutme/aboutme.js';
import Aboutstyles from '../aboutme/aboutme.css';
import Contact from '../contact/contact.js'
import Contactstyles from '../contact/contact.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function Navbar(){
  return(
    <div className="list">
      <div className='nav'>
      <BrowserRouter >
      <Routes className="items">
      <Route path='/home' element={<Home />}/>
      <Route  path='/services' element={<Services />}/>
      <Route  path='/aboutme' element={<About />}/>
      <Route  path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}
export default Navbar;