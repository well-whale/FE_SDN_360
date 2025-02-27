import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";

import Homepage from "./Pages/HomePage/HomePage";
import ProductDetailPage from "./Pages/ProductDetail/ProductDetailPage";
import SignIn from "./Pages/SignInPage/SignIn";
import SignUp from "./Pages/SignUpPage/SignUp";
import Order from "./Pages/Order/Order";
import ProductsManager from "./Pages/Staff/Product/ProductsManager";
import OrderDetailManager from "./pages/OrderDetail/OrderDetailManager";

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
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:orderId",
        element: <OrderDetailManager />,
      },
      

    ]
  },
  {
    path: "/staff",
    // element: <RootLayout />, // Nếu bạn muốn có layout khác cho staff, thay đổi tại đây
    children: [
      { path: "product", element: <ProductsManager /> }, 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
