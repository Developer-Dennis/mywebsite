import React from 'react'
import './navbar.css';
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
    <div className="nav">
      <div className='lists'>
      <BrowserRouter >
      <Routes>
      <Route className="items" path='/home' element={<Home />}/>
      <Route  className="items" path='/services' element={<Services />}/>
      <Route className="items" path='/aboutme' element={<About />}/>
      <Route className="items" path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}
export default Navbar;