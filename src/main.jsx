import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Layouts/Root/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Router from './Layouts/Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} >
  <StrictMode>
    <Root />
  </StrictMode>,
  </RouterProvider>
)
