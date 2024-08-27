import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('authToken');
      
      if (token) {
        try {
          const response = await axios.get('/api/validate-token', {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          if (response.status === 200) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, []);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
