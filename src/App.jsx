import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/HomePage";
import RootLayout from "./components/RootLayout";
import ProductDetail from "./screens/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
