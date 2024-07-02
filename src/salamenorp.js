import { Link } from "react-router-dom";
import Igsala1 from "./data/igsala1.json";
import Igsala2 from "./data/igsala2.json";
import Igsala3 from "./data/igsala3.json";
import Igsala4 from "./data/igsala4.json";
import Igsala5 from "./data/igsala5.json";
import Igsala6 from "./data/igsala6.json";
const Salamenorp = () => {
    return <salamenorp>
      
         <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
         < div class= "container">
         < div class= "row">
         <h1>Muebles de sala:</h1>
     
    <div class="container">

    <div class="dropdown">
  <button class="dropbtn">Menor Precio ▼</button>
  <div class="dropdown-content">

    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+sala+A.Z/">A-Z</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+sala+oferta/">Ofertas</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+sala+mayor+precio/">Mayor Precio</Link></a> 
    
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
              Igsala6.map(it => {
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
              Igsala3.map(it => {
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
              Igsala4.map(it => {
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
              Igsala5.map(it => {
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
              Igsala2.map(it => {
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
              Igsala1.map(it => {
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
    </salamenorp>;
}

export default Salamenorp;