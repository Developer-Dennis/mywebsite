import './services.css';
import brand1  from './image1.jpg'
import brand2 from './image2.jpg'
import brand3 from './image3.jpg'


export default function Services(){
    return (
        <>
        <h1 className='services'>Services We Offer</h1>
        <figure>
        <div class="row">
        <div class="column">
        <img className='servicesimage' src={brand1} alt="img" />
        <figcaption className='heading'>Web Application Development</figcaption>
        <figcaption className='text'>We will build a qualityand reliable web application <br></br>that will enable your to perform your business <br></br>function without a glitch or misfunction</figcaption>
        </div>
        <div class="column">
        <img className='servicesimage' src={brand2} alt="img" />
        <figcaption className='heading'>Website Design</figcaption>
        <figcaption  className='text'>We will help you design a website that will market your business on a global scale by using latest technologies to produce the best visually appealing website</figcaption>
        </div>
        <div class="column">
        <img className='servicesimage' src={brand3} alt="img" />
        <figcaption className='heading'>Twitter Promotion/Marketing</figcaption>
        <figcaption className='text'>We will help you market your products and services on Twitter which will inturn be visible  to many people  henve increasing your sales.</figcaption>
        </div>
        </div>
        
        </figure>
        </>
    )
}