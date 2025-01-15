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
import Contact from "../pages/Contact";
import AllUsers from "../pages/dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/AddItems";

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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order",
                element: <Order />
            },

            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>

            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <div>Not Found</div>
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <div>Not Found</div>
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: '/dashboard/user-home',
                element: <div>User Home</div>

            },
            {
                path: '/dashboard/cart',
                element: <PrivateRoute>
                    <Cart />
                </PrivateRoute>

            }

            // admin routes
            ,
            {
                path: "/dashboard/admin-home",
                element: <AdminRoute>
                    <div>
                        admin-home
                    </div>
                </AdminRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute>
                    <AllUsers />
                </AdminRoute>
            },
            {
                path: '/dashboard/add-items',
                element: <AdminRoute>
                    <AddItems />
                </AdminRoute>


            },
            {
                path: '/dashboard/manage-items',
                element: <AdminRoute>
                    <div>
                        manage items
                    </div>
                </AdminRoute>

            }, {
                path: '/dashboard/manage-bookings',
                element: <AdminRoute>
                    <div>
                        manage Bookings
                    </div>
                </AdminRoute>
            }
        ]

    }
]);
