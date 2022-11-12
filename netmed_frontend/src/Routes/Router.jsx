import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Cred/Login";
import SignUp from "../Components/Cred/Signup";
import Homepage from "../Components/Homepage/Homepage";
import Require from "../Components/RequireRoute/Require";
import Cart from "../Pages/Cart/Cart";

import AllProduct from "../Pages/Products_Page/product/AllProduct";

import Order_Review from "../Pages/Order_Review/Order_Review";
import Payment from "../Pages/Payment_Page/Payment";

import Well from "../Pages/Products_Page/wellness";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/product" element={<AllProduct/>}/>

        <Route
          path="/cart"
          element={
         
              <Cart />

          }
        />
        <Route path="/wellness" element={<Well />} />
        <Route path="/cart/order-review" element={<Order_Review />} />
        <Route path="/cart/checkout" element={<Payment />} />

      </Routes>
    </div>
  );
}
