import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import  Button  from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const feather= require("feather-icons");
setTimeout( ()  =>{feather.replace();},1000);

const root = createRoot(document.getElementById("root"));
root.render(
   
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
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside>

                        
                    </Aside>
          
         
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);