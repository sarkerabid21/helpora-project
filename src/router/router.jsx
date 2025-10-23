import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";

import SignIn from "../pages/SignIn/SignIn";
import VolunteerDetails from "../pages/VolunteerDetails.jsx/VolunteerDetails";
import PrivateRoute from "../routes/PrivateRoute";
import ApplyVolunteer from "../pages/Shared/ApplyVolunteer";
import AllVolNeeds from "../pages/Home/AllVolNeeds";
import Register from "../pages/Register/register";
import MyRequestPage from "../pages/MyRequestPage/MyRequestPage";
import AddNeeds from "../pages/Home/AddNeeds";
import MyPosts from "../pages/MyPosts/MyPosts";
import UpdatePost from "../pages/Shared/UpdatePost";
import Error from "../pages/Shared/Error";
import Faq from "../pages/Shared/Faq";
import AboutUs from "../pages/Shared/AboutUs";
import Donations from "../pages/Shared/Donations";
import DonorInsights from "../pages/Shared/DonorList/DonorInsights";
import PaymentSuccess from "../pages/Shared/PaymentSuccess";
import PaymentFailed from "../pages/Shared/PaymentFailed";
import PaymentCancelled from "../pages/Shared/PaymentCancelled";



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
            path: '/volunteer/:id',
            Component: VolunteerDetails,
            loader: ({params}) => fetch(`https://volunteer-server-blush.vercel.app/volunteer/${params.id}`)
        },
        
        {
          path: '/allNeeds',
          loader: async () => {
           const res = await fetch('https://volunteer-server-blush.vercel.app/volunteer');
            return res.json();
},
          element: <PrivateRoute>
            <AllVolNeeds></AllVolNeeds>
          </PrivateRoute>
        },

        {
          path: '/applyVolunteer/:id',
          element: <PrivateRoute>
            <ApplyVolunteer></ApplyVolunteer>
          </PrivateRoute>
        },
        {
            path: '/myRequests',
            element: <PrivateRoute>
              <MyRequestPage></MyRequestPage>
            </PrivateRoute>
        },
        {
            path: '/myPosts',
            element: <PrivateRoute>
              <MyPosts></MyPosts>
            </PrivateRoute>
        },
        {
            path: '/addNeeds',
            element: <PrivateRoute>
              <AddNeeds></AddNeeds>
            </PrivateRoute>
        },
        {
           path: '/update/:id',
           element: <PrivateRoute>
              <UpdatePost></UpdatePost>
            </PrivateRoute>

        },
        {
            path: '/faq',
            Component: Faq

        },
         { path: '/paymentsuccess', Component: PaymentSuccess },
      { path: '/paymentfailed', Component: PaymentFailed },
      { path: '/paymentcancelled', Component: PaymentCancelled },
        {
            path: '/donations',
            Component: Donations

        },
        {
            path: '/donnorlist',
            Component: DonorInsights

        },
        {
            path: '/aboutus',
            Component: AboutUs

        },
        {
            path: '/register',
            Component: Register

        },
        {
            path: '/signin',
            Component: SignIn

        },
        {
            path:"/*",
           Component: Error
        },
    ]
  },
]);
export default router;