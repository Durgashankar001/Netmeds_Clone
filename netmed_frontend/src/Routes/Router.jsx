import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Cred/Login";
import SignUp from "../Components/Cred/Signup";
import Homepage from "../Components/Homepage/Homepage";
import Cart from "../Pages/Cart/Cart";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
