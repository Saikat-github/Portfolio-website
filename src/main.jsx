import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotDeployed from './pages/NotDeployed.jsx'
import WebDev from './pages/Services/WebDev.jsx'
import VideoEditing from './pages/Services/VideoEditing.jsx'
import Thubnail from './pages/Services/Thubnail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/notdeployed",
        element: <NotDeployed />
      },
      {
        path: "/web-dev",
        element: <WebDev />
      }, 
      {
        path: "/video-editing",
        element: <VideoEditing />
      }, 
      {
        path: "/thumbnail",
        element: <Thubnail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
