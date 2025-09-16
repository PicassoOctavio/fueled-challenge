import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../auth";
import {  About, Home } from "../pages";
import { useAuthStore } from "../hooks/useAuthStore";


export const AppRouter = () => {
  const { status } = useAuthStore()
  return (
    <Routes>
      {status === 'not-authenticated' 
        ? (
          <>
            <Route path="/" element={<Login />} /> 
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )
      }
    </Routes>
  )
}
