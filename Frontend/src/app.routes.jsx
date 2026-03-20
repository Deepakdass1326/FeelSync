import { createBrowserRouter } from "react-router"
import Register from "./Features/auth/pages/Register"
import Login from "./Features/auth/pages/Login"
import Protected from "./Features/auth/components/Protected"
import FaceExpression from "./Features/Expression/components/FaceExpression"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected>
            <FaceExpression/>
        </Protected>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }

])