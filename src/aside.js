import  Button  from "react-bootstrap/Button";

const feather= require("feather-icons");
setTimeout( ()  =>{feather.replace();},1000);
const Aside = () => {
    return <aside>
     
        <div class=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
          <h1>---- Registro   ----- </h1>
         
          <br></br>
          <br></br>
          <form action=""></form>
          <h1> Nombres y Apellidos: </h1>
          <br></br>
          <input type="text" required/>
          <br></br>
          <h1> Email: </h1>
          <br></br>
          <input type="email" required/>
          <br></br>
          <h1> Numero: </h1>
          <br></br>
          <input type="number" required/>
          <br></br>
          <h1> Contraseña: </h1>
          <br></br>
          <input type="password" required />
          <br></br>
          <Button className= "btn btn-primary">
        <i data-feather="filter"></i> Texto</Button>  
         

        </div>
    </aside>;
}

export default Aside;