import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from '../assets/others/toaster.json';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
        <Lottie animationData={loadingAnimation} loop={true} style={{ width: 150, height: 150 }} />
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
