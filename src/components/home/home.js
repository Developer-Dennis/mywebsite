import './home.css';
import img  from './home.jpg'



export default function Home(){
    return (
        <body className='home'>
            <img  src={img} alt="img" />
           
        <h1 className='desc'>Hi Am Dennis Kemboi,</h1>
        <p className='paragraph'>  IT Graduate, Freelance Web Developer,Designer, Twitter Strategist</p>
        < div className="options">
            <a  href="#">Hire Me</a>
            <a   href="https://drive.google.com/file/d/1Wgxh3pX4QguUGZsp5HgvPGT_BHJWJcRw/view?usp=drivesdk">Download Resume</a>
        </div>
      
        </body>
    )
}





