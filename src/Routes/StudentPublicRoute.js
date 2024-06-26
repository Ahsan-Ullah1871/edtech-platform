import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
	const isLoggedIn = useAuth();
	return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
