
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "./routes";
import UserLayout from "./layouts/UserLayout/UserLayout";
import SignIn from "./Pages/SignInPage/SignIn";
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: route.home,
      element: <UserLayout />,
      children: [

        {
          path: route.login,
          element: <SignIn />,
        },
        {
          path: route.register,
          element: <SignUp />,
        },
      ],
    },

    // {
    //   path: route.admin,
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: route.accountManagement,
    //       element: <ManageAccount />,
    //     },
    //     {
    //       path: route.boxManagement,
    //       element: <ManageBox />,
    //     },
    //   ],
    // },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
