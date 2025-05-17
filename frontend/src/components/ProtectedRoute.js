import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');  // Check if token exists

  if (!token) {
    // If no token, redirect to signup/login page
    return <Navigate to="/signup" replace />;
  }

  // If token exists, allow access to the child component
  return children;
};

export default ProtectedRoute;
