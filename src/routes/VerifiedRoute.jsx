import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import CenterContainer from "../layouts/CenterContainer";
import { LoaderRing } from "../componenets/Loader";

export default function VerifiedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <CenterContainer><LoaderRing /></CenterContainer>;

  return !!user?.email_verified_at ? children : <Navigate to="/verify" replace /> ;
}
