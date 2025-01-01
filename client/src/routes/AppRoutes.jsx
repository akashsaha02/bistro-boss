import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },]
    }
]);
