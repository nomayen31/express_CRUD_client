import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './Components/PostUser/PostUser';
import DisplayUser from './Components/DisplayUser';
import UpdateData from './Components/UpdateData';


const router = createBrowserRouter([
  {
    path: "/",
    element:<PostUser></PostUser>,
  },
  {
    path:'/users',
    element:<DisplayUser></DisplayUser>,
    loader:() => fetch(`http://localhost:5000/users`)

  },
  {
    path:'/users/:id',
    element:<UpdateData></UpdateData>,
    loader:({params}) => {
      console.log(params);
      return fetch(`http://localhost:5000/users/${params.id}`)
    }

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
