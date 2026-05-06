import { useState, useEffect } from 'react';
import api from '../lib/api';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        // You might want an endpoint like /auth/me to verify token and get user data
        const res = await api.get('/auth/profile');
        setUser(res.data);
        setIsLoggedIn(true);
      } catch (err) {
        console.error('Auth check failed', err);
        localStorage.removeItem('access_token');
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = '/login';
  };

  return { user, isLoggedIn, loading, logout };
};
