import { useEffect } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../auth";
import {  About, Home } from "../pages";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
  checkAuthToken();

  const interval = setInterval(() => {
    checkAuthToken();
  }, 15 * 60 * 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <Routes>
      {status === 'not-authenticated' 
        ? (
          <>
            <Route path="/" element={<Login />} /> 
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        )
      }
    </Routes>
  )
}
