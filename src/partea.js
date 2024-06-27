import  Button  from "react-bootstrap/Button";
const Partea = ({ partea }) => {
    return  <ul class="nav">
 <li class="nav-item">
 <blockquote class="blockquote text-center">
 <img src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg " class="img-thumbnail" alt="..." width="200" height="200"></img>
          
 
          <h1>Iniciar Sesion</h1>
          <h5> Inicia sesion para continuar </h5> 
          </blockquote>
   


      <br></br>
 
      <h6 > CORREO</h6>
      
      
      <input type="email"  size="40" required/>
      
      <br></br>
      <br></br>
      <h6 > CONTRASEÑA </h6>
      <input type="text" size="40" required/>
      <br></br>
      <br></br>
      
      <blockquote class="blockquote text-center">
      <Button className= "send_btn"  class="nav-link active" href="/catalogo/"> Inicio de sesion </Button> 

      </blockquote>
  
    </li> 
    </ul>

    {partea};
    
}

export default Partea;