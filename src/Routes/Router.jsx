import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:"/details",
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>
            }
        ]
    }
])

export default router;