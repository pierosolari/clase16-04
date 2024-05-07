import  Button  from "react-bootstrap/Button";

import Carousel from 'react-bootstrap/Carousel';



import muebles from "./data/muebles.json";
import Partea from "./partea";
import Parteb from "./parteb";
const Inicio = () => {
    return <inicio>
      <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Partea></Partea>
                    </div>
                    <div className="col-md-8">
                        
                        <Parteb></Parteb>
                    </div>
                    </div>
                    </div>
       

    </inicio>;
}

export default Inicio;