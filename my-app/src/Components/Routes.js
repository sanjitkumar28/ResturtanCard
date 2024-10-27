import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import About from "./About";
import { Suspense } from "react";

const Contact= React.lazy(()=>import("./Contact"))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />, // Add your About route
  },
  {
   path:'/contact',
   element:(<Suspense fallback={<div>Loading</div>}>
    <Contact/>
   </Suspense>)
  }
]);

export default routes;