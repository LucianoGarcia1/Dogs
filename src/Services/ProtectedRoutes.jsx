import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { User } from "../Routes/Conta/User";

export const ProtectedRoutes = ({children}) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login"/>;
};
