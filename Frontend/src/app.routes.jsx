import { createBrowserRouter } from "react-router"
import Register from "./Features/auth/pages/Register"
import Login from "./Features/auth/pages/Login"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path:"/login",
        element:<Login/>
    }

])