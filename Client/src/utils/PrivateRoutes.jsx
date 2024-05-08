import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  try {
    const token = Cookies.get('access_token');

    if (token) {
      return <Outlet />;
    } else {
      return <Navigate to='/login' />;
    }
  } catch (error) {
    console.error("Error while checking token:", error)
    return <Navigate to='/error' />;
  }
}

export default PrivateRoutes;
