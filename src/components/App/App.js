import React from 'react';
import { BrowserRouter as Router,Switch, Route, Routes } from 'react-router-dom'; 
import '../App/App.css'
import Home from '../home/home.js';
import Services from '../services/services.js';
import About from '../aboutme/aboutme.js';
import Contact from '../contact/contact.js'
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar.js';


function App() {
  return(

<>
    <Router >
    <Navbar />
    <Routes>
    <Route className="items" path='/home' element={<Home />}/>
    <Route  className="items" path='/services' element={<Services />}/>
    <Route className="items" path='/aboutme' element={<About />}/>
    <Route className="items" path='/contact' element={<Contact />}/>
    </Routes>
    </Router>
    

    
     
  <Home />
  <Services />
  <About />
  <Contact />
  <Footer />
  
  </>
  )
  
}

export default App;
