import { StrictMode } from "react";

import Header from "./header";
import Footer from "./footer";

import { Outlet } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const feather = require('feather-icons');
setTimeout( ()  =>{feather.replace();},1000);
const Basic = () => {
    return (
        <>
             <StrictMode>
        
        <Header></Header>
         
        <Breadcrumb>
      <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Muebles
        <i data-feather="filter"></i> </Breadcrumb.Item>
      
      <Breadcrumb.Item active>Informacion</Breadcrumb.Item>
      
    </Breadcrumb>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    
          
         
                </div>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
        </>
    );
}

export default Basic;