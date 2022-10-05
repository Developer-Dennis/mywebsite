import navstyles from '../navbar/navbar.css';
import Navbar from '../navbar/navbar.js';
import Home from '../home/home.js';
import Homestyles from '../home/home.css';
import Services from '../services/services';
import About from '../aboutme/aboutme.js';
// import {Button, Input,Form} from './contact/contact.js'

function App() {
  return(
    <>
  <Navbar />
  <Home />
  <Services />
  <About />
   {/* <Button /> */}
  </>
  )
  
}

export default App;
