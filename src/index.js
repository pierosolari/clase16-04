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