import './home.css';
import img  from './home.jpg'



export default function Home(){
    return (
        <div className='home'>
            <img  src={img} alt="img" />
           
            <h1 className='desc'>Hi Am Dennis Kemboi,</h1><br></br>
            <p className='paragraph'>  IT Graduate, Freelance Web Developer,Designer, Twitter Strategist</p>
            < div className="options">
                <a className='hire'  href="http://localhost:3000/contact">Hire Me</a>
                <a  className='resume' href="https://drive.google.com/file/d/1Wgxh3pX4QguUGZsp5HgvPGT_BHJWJcRw/view?usp=drivesdk" target="_blank">Download Resume</a>
            </div>
      
        </div>
    )
}





