import LoadingSpiner from "../components/LoadingSpiner/LoadingSpiner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = UseAdmin();
  // console.log(isAdmin,isAdminLoading)

  if (loading || isAdminLoading) {
    return <LoadingSpiner />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
