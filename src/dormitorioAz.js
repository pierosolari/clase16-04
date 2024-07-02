import Carousel from 'react-bootstrap/Carousel';

import { Link } from "react-router-dom";
import Igdormitorio1 from "./data/igdormitorio1.json";
import Igdormitorio2 from "./data/igdormitorio2.json";
import Igdormitorio3 from "./data/igdormitorio3.json";
import Igdormitorio4 from "./data/igdormitorio4.json";
import Igdormitorio5 from "./data/igdormitorio5.json";
import Igdormitorio6 from "./data/igdormitorio6.json";
const DormitorioAz = () => {
    return <dormitorioAz>
      
         <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
         < div class= "container">
         < div class= "row">
         <h1>Muebles de dormitorio:</h1>
     
    <div class="container">

    <div class="dropdown">
  <button class="dropbtn">A-Z ▼</button>
  <div class="dropdown-content">

    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+dormitorio+oferta/">Ofertas</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+dormitorio+menor+precio/">Menor Precio</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+dormitorio+mayor+precio/">Mayor Precio</Link></a>
    
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
              Igdormitorio1.map(it => {
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

         < div class= "col-md-4  text-center">
         <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igdormitorio5.map(it => {
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
              Igdormitorio4.map(it => {
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
              Igdormitorio3.map(it => {
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

         < div class= "col-md-4  text-center"> 
         <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
            <Carousel> {
              Igdormitorio6.map(it => {
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
              Igdormitorio2.map(it => {
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
    </dormitorioAz>;
}

export default DormitorioAz;