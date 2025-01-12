import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from './../pages/Register';
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import Dashboard from './../Layout/Dashboard';
import Cart from "../pages/dashboard/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/order",
                element:<Order/>
            },
            {
                path: "/order/:category",
                element:<Order/>
            },
            {
                path:"/profile",
                element:<PrivateRoute>
                    <Profile/>
                </PrivateRoute>

            }
        ]
    },
    {
        path:'/login',
        element:<Login/>,
        errorElement:<div>Not Found</div>
    },
    {
        path:'/register',
        element:<Register/>,
        errorElement:<div>Not Found</div>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        errorElement:<div>Not Found</div>,
        children:[
            {
                path:'/dashboard/cart',
                element:<Cart/>
                
            }
        ]

    }
]);
