import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import RootLayout from './components/RootLayout'
import ProductDetail from './components/ProductDetail/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/product',
        element: <ProductDetail />,
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}