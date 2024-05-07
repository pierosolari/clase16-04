import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const feather = require('feather-icons');
import muebles from "./data/muebles.json";
setTimeout(() => {
    feather.replace();
}, 1000);


const Main = () => {
  const navigate= useNavigate();
  const handleClick= (slug) => {
     navigate("/detalle/"+slug)
  }
    return <main>
        
         
        <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
        <Carousel>
    
            {
                muebles.map(it => {
                    return (<Carousel.Item>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            
                            
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
              
        </Carousel>
        
       
        </div>
    </main>;
}

export default Main;