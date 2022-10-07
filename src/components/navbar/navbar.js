import './navbar.css';
import {  Link } from "react-router-dom";



export default function Navbar(){
  return (
    <nav>
      <ul className='list'>
          <li className='items' >Home</li>
          <li className='items'>Services</li>
          <li className='items'>About Me</li>
          <li className='items'>Contact</li>
      </ul>
      

    </nav>
    
  ) 
}


