import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './index.css'
import ErrorEndpoint from './Routes/ErrorEndpoint/ErrorEndpoint.jsx';
import Login from './Routes/Login/Login.jsx';
import Home from './Routes/Home/Home.jsx';
import Signup from './Routes/Signup/Signup.jsx';
import ForgotPassword from './Routes/ForgotPassword/ForgotPassword.jsx';

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorEndpoint/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRouter}/>
  </React.StrictMode>,
)
