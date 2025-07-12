import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useBlog();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;