import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner color="purple" className="h-16 w-16" />
            </div>
        );
    } else if (!user?.email) {
        return <Navigate state={location.pathname} to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;
