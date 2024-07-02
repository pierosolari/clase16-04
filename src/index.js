import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { createRoot } from "react-dom/client";

import Main from "./main";
import Aside from "./aside";


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
 
import Basic from './layout/basic';
import Inicio from "./inicio";
import Informacion from "./informacion";
import Cosas from "./cosas";
import Cosas2 from "./cosas2";
import Cosas3 from "./cosas3";
import SalaAz from "./salaAz";
import Salamayorp from "./salamayorp";
import Salamenorp from "./salamenorp";
import Salaoferta from "./salaoferta";
import DormitorioAz from "./dormitorioAz";
import DormitorioMayorp from "./dormitorioMayorp";
import DormitorioMenorp from "./dormitorioMenorp"; 
import DormitorioOferta from "./dormitorioOferta"; 
import ComedorAz from "./comedorAz";
import ComedorMayorp from "./ comedorMayorp";
import ComedorMenorp from "./comedorMenorp";
import ComedorOferta from "./comedorOferta ";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        
        children: [
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            {
                path: "detalle/",
               
                element: <Inicio />,
               
            },
           
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+sala/",
               
                element: <Cosas />,
               
            },
            
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+sala+A.Z/",
               
                element: <SalaAz />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+sala+mayor+precio/",
               
                element: <Salamayorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+sala+menor+precio/",
               
                element: <Salamenorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+sala+oferta/",
               
                element: <Salaoferta />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+dormitorio/",
               
                element: <Cosas2 />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+dormitorio+A.Z/",
               
                element: <DormitorioAz />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+dormitorio+mayor+precio/",
               
                element: <DormitorioMayorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+dormitorio+menor+precio/",
               
                element: <DormitorioMenorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+dormitorio+oferta/",
               
                element: <DormitorioOferta />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+comedor/",
               
                element: <Cosas3 />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+comedor+A.Z/",
               
                element: <ComedorAz />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+comedor+mayor+precio/",
               
                element: <ComedorMayorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+comedor+menor+precio/",
               
                element: <ComedorMenorp />,
               
            },
            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "catalogo.mueblesd+comedor+oferta/",
               
                element: <ComedorOferta />,
               
            },

            {
                path: '',
                element: <>
                <div class="container">
                    <div class="row">
                    <div className="col-4">
                        <Aside></Aside>
                    </div>
                    <div className="col-md-8">
                        
                        <Main></Main>
                    </div>
                    </div>
                    </div>
                </>
            },
            
            {
                path: "info/",
               
                element: <Informacion />,
               
            },
            
        ],
        
    },
  ]);
  
  

  


const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
   
);