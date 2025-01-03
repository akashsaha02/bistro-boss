import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu";
import Order from "../pages/Order";

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
                path: "/order/:category",
                element:<Order/>
            }
        ]
    }
]);
