import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className='text-xl text-red-500'>Page is not found</div>,
    children: [
      {path: '/',
      element: <Home></Home>
    },
      {path: 'projects',
      element: <Projects></Projects>
    },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
