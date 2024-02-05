import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ManageUsers from "../../pages/ManageUsers/ManageUsers";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/manage_users",
                element: (
                    <PrivateRoute>
                        <ManageUsers />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default MainRouter;
