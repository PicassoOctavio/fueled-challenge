import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { About, Home } from "../pages";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
