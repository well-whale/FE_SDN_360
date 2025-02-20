import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";

import Homepage from "./Pages/HomePage/HomePage";
import ProductDetailPage from "./Pages/ProductDetail/ProductDetailPage";
import SignIn from "./Pages/SignInPage/SignIn";
import SignUp from "./Pages/SignUpPage/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/product",
        element: <ProductDetailPage/> ,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      }

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
