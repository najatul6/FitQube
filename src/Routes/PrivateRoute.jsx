import PropTypes from "prop-types";
import useAuth from "@/hooks/useAuth";
import Loading from "@/Pages/Common/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (loading) return <Loading />;

  if (user && token) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;