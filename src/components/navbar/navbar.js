// import React from 'react'
import '../navbar/navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



function Navbar(){
  const [open, setOpen] = useState(false);
  return(
  <nav className='navbar'>
    <Link to="/" className='nav-logo' onClick={() => setOpen(false)}>
      Dennis Kemboi
    </Link>
    <ul className={open ? 'nav-link active' : 'nav-links'}>
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
            About Me
          </Link>
      </li>
      <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </Link>
      </li>
    </ul>
  </nav>
  )
}
export default Navbar;