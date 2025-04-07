import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { validateToken } from "../services/validateToken";

export default function ProtectedRoute({ children }) {
    const [isValid, setIsValid] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            const result = await validateToken();
            setIsValid(!!result);
            setLoading(false);
    };

    checkToken();
    }, []);

    if (loading) return <p>Loading...</p>;

    return isValid ? children : <Navigate to="/login" replace />;
}
