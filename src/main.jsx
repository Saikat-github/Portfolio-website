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
import { MainNavbar } from './components/index.js'

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
        element: <>
          <MainNavbar />
          <NotDeployed />
        </>
      },
      {
        path: "/web-dev",
        element: <>
          <MainNavbar />
          <WebDev />
        </>
      },
      {
        path: "/video-editing",
        element: <>
          <MainNavbar />
          <VideoEditing />
        </>
      },
      {
        path: "/thumbnail",
        element: <>
          <MainNavbar />
          <Thubnail />
        </>
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
