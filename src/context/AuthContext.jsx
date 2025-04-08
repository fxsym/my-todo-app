import { createContext, useState, useEffect } from 'react';
import { login as loginRequest } from '../services/authServices';
import { logout as logoutRequest } from '../services/authServices';
import { validateToken } from '../services/validateToken';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await validateToken(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password, device) => {
    const res = await loginRequest(username, password, device);
    localStorage.setItem('token', res.token); 
    setUser(res.user);                        
  };

  const logout = async () => {
    await logoutRequest();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
