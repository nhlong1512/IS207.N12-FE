import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Button } from "antd";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import { useLayoutEffect } from "react";
import Register from "./components/Auth/Register";
import FindYourAccount from "./components/Auth/FindYourAccount";
import CodeValidation from "./components/Auth/CodeValidation";
import ResetPassword from "./components/Auth/ResetPassword";
import ListOrder from "./pages/ListOrder";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Purchase from "./pages/Purchase";
import Sidebar from "./components/Profile/Sidebar";
import BillDetail from "./pages/BillDetail";
import MainAdmin from "./pages/admin/MainAdmin";
import Users_admin from "./components/admin/Users_admin";
import MainLayout from "./layouts/MainLayout";
import Staffs_admin from "./components/admin/Staffs_admin";
import AddPerSon from "./components/admin/FormAdd/AddPerSon";
import DetailPerSon from "./components/admin/FormAdd/DetailPerSon";
const excludeHeaderFooterPath = [
  "/signin",
  "/signup",
  "/forgotpassword",
  // "/storelocator",
  "/find-account",
  "/code-validation",
  "/reset-password",

  "/admin",
  // "/product-detail",
  // "/cart",
  // "/profile",
];

const getHeader = () => {
  console.log(window.location.pathname);
  if (excludeHeaderFooterPath.includes(window.location.pathname)) return null;
  return <Header />;
};

const getFooter = () => {
  if (excludeHeaderFooterPath.includes(window.location.pathname)) return null;
  return <Footer />;
};

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/find-account" element={<FindYourAccount />} />
          <Route path="/code-validation" element={<CodeValidation />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin/" element={<MainAdmin />}>
            <Route path="user" element={<Users_admin />} />
            <Route path="staff/" element={<Staffs_admin />} />
            <Route path="staff/add-staff" element={<AddPerSon />} />
            <Route path="staff/detail-staff" element={<DetailPerSon />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/sanpham" element={<ListOrder />} />
            {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/sanpham/:id" element={<ProductDetail />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/profile" element={<Sidebar />} />
            <Route path="/bill/:id" element={<BillDetail />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
