import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import register from "../pages/Register/register";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/register',
            Component: register

        },
        {
            path: '/signin',
            Component: SignIn

        }
    ]
  },
]);
export default router;