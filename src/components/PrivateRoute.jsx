import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../contexts/useAuth";

const PrivateOutlet = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateOutlet;
