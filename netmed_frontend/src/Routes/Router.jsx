import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Cred/Login";
import SignUp from "../Components/Cred/Signup";
import Homepage from "../Components/Homepage/Homepage";
import Cart from "../Pages/Cart/Cart";
import Well from "../Pages/Products_Page/wellness";


export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wellness" element={<Well/>}/>
      </Routes>
    </div>
  );
}
