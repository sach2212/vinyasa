import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import Contact from "./components/page/contact.jsx"

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/ab",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "/",
    element: <div><App/></div>,
  },

{
  path: "contact",
  element:<Contact/>
},
{
  path:"home",
  element : <App/>
}



]);




createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);





// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
