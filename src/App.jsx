import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './app.css'
import Heroes from './Heroes'
import Home from './Home'
import RootLayout from './RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="heroes" element={<Heroes />} />
    </Route>
  )
)

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
