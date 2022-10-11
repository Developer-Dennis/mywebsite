import navstyles from '../navbar/navbar.css';
import Home from '../home/home.js';
import Homestyles from '../home/home.css';
import Services from '../services/services.js';
import About from '../aboutme/aboutme.js';
import Contact from '../contact/contact.js'
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar.js';
import React from 'react';

function App() {
  return(
    <>
    <div className='list'>
    
    <ul id="nav-list">
      <li><a href="http://localhost:3000/"> Home</a></li>
      <li><a href="http://localhost:3000/services">Services </a></li>
      <li><a href="http://localhost:3000/aboutme"> About Me</a></li>
      <li><a href="http://localhost:3000/contact"> Contact</a></li>
    </ul>
    <Navbar />
    </div>
  <Home />
  <Services />
  <About />
  <Contact />
  <Footer />
  
  </>
  )
  
}

export default App;
