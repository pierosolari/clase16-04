import { Link } from "react-router-dom";
const SalaAz = () => {
    return <salaaz>
      
         <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
         < div class= "container">
         < div class= "row">
         <h1>Muebles de sala:</h1>
     
    <div class="container">

    <div class="dropdown">
  <button class="dropbtn">A-Z ▼</button>
  <div class="dropdown-content">

    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+sala+oferta/">Ofertas</Link></a>
    <a href="#"><Link class="nav-link " to="/catalogo.mueblesd+sala+menor+precio/">Menor Precio</Link></a>  
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

         < div class= "col-md-4 text-center"> <h1>PIERO JAVIER SOLARI JULCA</h1>  </div>
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
    </salaaz>;
}

export default SalaAz;