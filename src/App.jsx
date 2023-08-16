import './App.scss'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <Add />
        },
        {
          path: 'products/:id',
          element: <ProductDetails />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ])
  return (
      <>
        <RouterProvider router={router} />
      </>
    )
}

export default App
