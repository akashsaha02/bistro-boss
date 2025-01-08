import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";

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
        element:<Login/>,
        errorElement:<div>Not Found</div>
    }
]);
