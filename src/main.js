import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);
const muebles = [
  {
      name: "Mesa de Centro Funes ",
      slug: "mueble-1",
      description: "Marca: Just Home Collection -Modelo: FUNES - Ancho: 120 cm -Alto: 40 cm -Profundidad: 40 cm", 
      picture:"https://sodimac.scene7.com/is/image/SodimacPeru/8986452_01?wid=1500&hei=1500&qlt=70",
    },
    
      
  {
      name: "Mesa de Centro Salem",
      slug: "mueble-2",
      description: "Miel/Plomo",
      picture:"https://sodimac.scene7.com/is/image/SodimacPeru/3740498_01?wid=1500&hei=1500&qlt=70",
  },
  {
      name: "Ropero",
      slug: "mueble-3",
      description: "6 Puertas 1 Cajones 1 Zapatera",
      picture:"https://sodimac.scene7.com/is/image/SodimacPeru/8904847_01?wid=1500&hei=1500&qlt=70",
  },
];

const Main = () => {
  const navigate= useNavigate();
  const handleClick= (slug) => {
     navigate("/detalle/"+slug)
  }
    return <main>
        
        
        <Carousel>
    
            {
                muebles.map(it => {
                    return (<Carousel.Item>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <Button className= "btn btn-primary"  onClick={() =>handleClick(it.slug)}> Ver Detalle</Button> 
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
              
        </Carousel>
        
       
     
    </main>;
}

export default Main;