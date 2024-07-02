import Carousel from 'react-bootstrap/Carousel';



import { Link } from "react-router-dom";
import Igcomedor1 from "./data/igcomedor1.json";
import Igcomedor2 from "./data/igcomedor2.json";
import Igcomedor3 from "./data/igcomedor3.json";
import Igcomedor4 from "./data/igcomedor4.json";
import Igcomedor5 from "./data/igcomedor5.json";
import Igcomedor6 from "./data/igcomedor6.json";
const Cosas3 = () => {
    return <cosas3>
      
         <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
         < div class= "container">
         < div class= "row">
         <h1>Muebles de comedor:</h1>
     
    <div class="container">

    <div class="dropdown">
  <button class="dropbtn">Elegir según ▼</button>
  <div class="dropdown-content">

    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+comedor+A.Z/">A-Z</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+comedor+oferta/">Ofertas</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+comedor+menor+precio/">Menor Precio</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+comedor+mayor+precio/">Mayor Precio</Link></a>
    
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
              Igcomedor1.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>

           < div class= "col-md-4 text-center">
           <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igcomedor2.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>


         < div class= "col-md-4 text-center"> 
<div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igcomedor3.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>


         <div class=" bg p-3 text-dark-emphasis  ">
         < div class= "container">
         < div class= "row">
         < div class= "col-md-4 text-center"> 
<div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igcomedor4.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>

           < div class= "col-md-4 text-center"> 
<div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
             Igcomedor5.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>

           < div class= "col-md-4 text-center"> 
<div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igcomedor6.map(it => {
              return (<Carousel.Item>
                <img className='w-100 dark-image' src={it.picture}></img>
                <h8>{it.name}</h8>
                <h8>{it.precio}</h8>
                 <Carousel.Caption> 
                </Carousel.Caption>
            </Carousel.Item>);
             })
             }
          </Carousel>
           </div>
           </div>
  
         </div>
  </div>
  </div>
  </div>
  </div>
  </div>
    </cosas3>;
}

export default Cosas3;