// import React from 'react'
import '../navbar/navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Navbar(){
  const [open, setOpen] = useState(false);
  return(
  <>
    <script src="script.js" defer></script>
    <nav className='navbar'>
      <Link to="/" className='nav-logo' onClick={() => setOpen(false)}>
        Dennis Kemboi
      </Link>
      <a href="#" className='toggle-button'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className='navbar-links'>
        <ul className={open ? 'nav-link active'  :'nav-links'}>
        <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
                Home
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick= {() => setOpen(false)}>
              Services
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/aboutme" className="nav-link" onClick={() => setOpen(false)}>
                About 
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact
              </Link>
          </li>
        </ul>
        </div>
    </nav>
  </>
  )
}
export default Navbar;