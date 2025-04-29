import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

// Import page components
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Import Navbar component
import Navbar from './components/Navbar'

// Layout component with Navbar
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </>
  )
}


// Create router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
