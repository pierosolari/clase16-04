import Carousel from 'react-bootstrap/Carousel';
import muebles from "./data/muebles.json";
import { Link } from "react-router-dom";
const Cosas = () => {
    return <cosas>
      
         <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
         < div class= "container">
         < div class= "row">
         <h1>Muebles de sala:</h1>
     
    <div class="container">

    <div class="dropdown">
  <button class="dropbtn">Elegir según ▼</button>
  <div class="dropdown-content">
    <a href="#">A-Z</a>
    <a href="#">Ofertas</a>
    <a href="#">Menor Precio</a>
    <a href="#">Mayor Precio</a>
  </div>
</div>

 
  <div class="search-section">
    <div class="search-bar">
      <input type="text" placeholder="Busca tu comodidad"/>
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</div>

         < div class= "col-md-4 text-center">
           <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              muebles.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>
         < div class= "col-md-4  text-center">  <h1>PIERO JAVIER SOLARI JULCA</h1></div>
         < div class= "col-md-4 text-center">  <h1>PIERO JAVIER SOLARI JULCA</h1></div>


         <div class=" bg p-3 text-dark-emphasis  ">
         < div class= "container">
         < div class= "row">
         < div class= "col-md-4 text-center"> <h1>PIERO JAVIER SOLARI JULCA</h1>  </div>
         < div class= "col-md-4  text-center">  <h1>PIERO JAVIER SOLARI JULCA</h1></div>
         < div class= "col-md-4 text-center">  <h1>PIERO JAVIER SOLARI JULCA</h1></div>
  
         </div>
  </div>
  </div>
  </div>
  </div>
  </div>
    </cosas>;
}

export default Cosas;