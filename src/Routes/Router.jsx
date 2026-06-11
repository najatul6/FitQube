import MainLayout from "@/Layout/MainLayout/MainLayout";
import ErrorPage from "@/Pages/Common/ErrorPage";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/Layout/DashboardLayout/DashboardLayout";
import Signin from "@/Pages/Authentication/Signin";
import Signup from "@/Pages/Authentication/Signup";
import PrivateRoute from "./PrivateRoute";
import Overview from "@/Pages/Dashboard/Overview";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // {
            //     path: "signin",
            //     element: <Signin />
            // },
            // {
            //     path: "signUp",
            //     element: <Signup />
            // }
        ]
    },
    // {
    //     path: "/dashboard",
    //     element: <PrivateRoute>
    //         <DashboardLayout />
    //     </PrivateRoute>,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: "overview",
    //             element: <Overview />
    //         }
    //     ]
    // }
    // {
    //     path:"/register",
    //     element:<Register/>
    // }
])
export default Router;