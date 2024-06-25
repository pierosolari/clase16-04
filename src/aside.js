import  Button  from "react-bootstrap/Button";



const feather= require("feather-icons");
setTimeout( ()  =>{feather.replace();},1000);
const Aside = () => {
    return <aside>
     
       
        <ul class="nav">
     <li class="nav-item">
     <blockquote class="blockquote text-center">
              <h1>CREAR NUEVA CUENTA</h1>
              <h6>¿Ya registrado? <a class="nav-link active" href="detalle/"  >Iniciar sesion</a></h6> 
              </blockquote>
       


          <br></br>
         
          <h6> NOMBRE</h6> 
        <input  type="text"  size="40" required/>
          <br></br>
          <br></br>
          <h6> CORREO </h6>
          <input type="email" size="40" required/>
          <br></br>
          <br></br>
          <h6> CONTRASEÑA </h6>
          
          <label >
          <input type="text"  size="40" required/>
          </label>
          <br></br>
          <br></br>
          <h6> FECHA DE NACIMIENTO </h6>
     
                    
          <input class="large-date"  type="date"  required />
         
                   
          
          <br></br>
          <br></br>
          <blockquote class="blockquote text-center">
          <Button className= "send_btn"  class="nav-link active" href="sout/"> CREAR </Button> 
          </blockquote>
         
      
        </li> 
        </ul>

       

        
    </aside>;
}

export default Aside;