import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CenterContainer from "../layouts/CenterContainer";
import { LoaderRing } from "../componenets/Loader";

export default function GuestRoute({ children }) {
  const { user} = useContext(AuthContext);
  return user ? <Navigate to="/dashboard" replace /> : children;
}
