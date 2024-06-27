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
                path: "catalogo/",
               
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