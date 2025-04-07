import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { validateToken } from "../services/validateToken";

export default function GuestRoute({ children }) {
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const result = await validateToken();
      setIsValid(!!result); // true kalau valid
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Jika sudah login, redirect ke dashboard
  return isValid ? <Navigate to="/dashboard" replace /> : children;
}
