import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from './Components Layout/Main';
import Home from './Components Layout/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
   element: <Main></Main>,
   children: [
    {
      path:'/',
      element: <Home></Home>
    }
   ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
