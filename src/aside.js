import  Button  from "react-bootstrap/Button";



const feather= require("feather-icons");
setTimeout( ()  =>{feather.replace();},1000);
const Aside = () => {
    return <aside>
     
       
        <blockquote class="blockquote text-center">
        <ul class="nav">
     <li class="nav-item">
              <h1>CREAR NUEVA CUENTA</h1>
              <h6>¿Ya registrado? <a class="nav-link active" href="detalle/"  >Iniciar sesion</a></h6> 
  
       


          <br></br>
          <form action=""></form>
          <h6> NOMBRE</h6> 
        <input  type="text" required/>
          <br></br>
          <br></br>
          <h6> CORREO </h6>
          <input type="email" required/>
          <br></br>
          <br></br>
          <h6> CONTRASEÑA </h6>
          <input type="text" required/>
          <br></br>
          <br></br>
          <h6> FECHA DE NACIMIENTO </h6>
          <div className="col-md-12">
                    
          <input type="date" required />
         
                    </div>
          
          <br></br>
          <br></br>
         
          <Button className= "send_btn"  class="nav-link active" href="sout/"> CREAR </Button> 

         
      
        </li> 
        </ul>

        </blockquote>

        
    </aside>;
}

export default Aside;