import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import './pages/shared/Login'
import Login from './pages/shared/Login';
import Register from './pages/shared/Register/Register'
import Home from "./pages/shared/Home"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import {createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom"

const router=createBrowserRouter(
  
[
{
  path:"/login",
  element:<Login/>
},
{
  path:"/Register",
  element:<Register/>
},
{
  path:"/",
  element:<App/>
}

] )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
