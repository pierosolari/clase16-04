import Carousel from 'react-bootstrap/Carousel';

import muebles from "./data/muebles.json";
const Parteb = ({ parteb }) => {
    return  <Carousel>
    
    {
        muebles.map(it => {
            return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <Carousel.Caption>
                    
                    
                </Carousel.Caption>
            </Carousel.Item>);
        })
    }
      
 {parteb}</Carousel> ;
}

export default Parteb;