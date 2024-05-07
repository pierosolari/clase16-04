import  Button  from "react-bootstrap/Button";
const Partea = ({ partea }) => {
    return  <blockquote class="blockquote text-center">
    <ul class="nav">
 <li class="nav-item">
 <img src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg" class="img-thumbnail" alt="..."></img>
          <h1>Iniciar Sesion</h1>
          <br></br>
          <h6> Inicia sesion para continuar </h6> 

   


      <br></br>
      <h6> CORREO </h6>
      <input type="email" required/>
      <br></br>
      <br></br>
      <h6> CONTRASEÑA </h6>
      <input type="text" required/>
      <br></br>
      <br></br>
      
     
      <Button className= "send_btn"  class="nav-link active" href=""> login </Button> 

     
  
    </li> 
    </ul>

    {partea}</blockquote>;
    
}

export default Partea;