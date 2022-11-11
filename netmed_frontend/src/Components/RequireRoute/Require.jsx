import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Require({ children }) {
  const token = useSelector((store) => store.Auth.token);
  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
}
