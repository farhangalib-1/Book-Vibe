import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Layouts/Root/Root.jsx'
import { RouterProvider } from 'react-router'
  import { ToastContainer, toast } from 'react-toastify';
import Router from './Layouts/Router/Router.jsx'
import BookProvider from './Components/BookContext/BookProvider.jsx'

createRoot(document.getElementById('root')).render(
 <BookProvider>
  <RouterProvider router={Router} >
    <Root />
    <ToastContainer />
  </RouterProvider>
  </BookProvider>
)