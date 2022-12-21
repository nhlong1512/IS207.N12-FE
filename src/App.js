import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Button, Popconfirm } from "antd";
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
import Products_admin from "./components/admin/Products_admin";
import AddProduct from "./components/admin/FormAdd/AddProduct";
import DetailProduct from "./components/admin/FormAdd/DetailProduct";
import Orders_admin from "./components/admin/Orders_admin";
import BillDetailadmin from "./components/admin/BillDetailadmin";
import HoaDon from "./components/admin/HoaDon";
import HoaDonDetail from "./components/admin/HoaDonDetail";
import HoaDonPDF from "./components/admin/HoaDonPDF";
import Blog from "./components/admin/Blog";
import Blog_admin from "./components/admin/Blog_admin";
import BlogDetail from "./components/admin/BlogDetail";
import Dashboard from "./components/admin/Dashboard";
import KhuyenMai from "./components/admin/KhuyenMai";
import AddUser from "./components/admin/FormAdd/AddUser";
import EditBlog from "./components/admin/EditBlog";
import ListBlog from "./pages/ListBlog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile/Profile";
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
            <Route path="" element={<Dashboard />} />
            <Route path="user" element={<Users_admin />} />
            <Route path="profile" element={<Profile />} />
            <Route path="staff/" element={<Staffs_admin />} />
            <Route path="user/add-user" element={<AddUser />} />
            <Route path="staff/add-staff" element={<AddPerSon />} />
            <Route path="staff/detail-staff" element={<DetailPerSon />} />
            <Route path="product" element={<Products_admin />} />
            <Route path="product/add-product" element={<AddProduct />} />
            <Route path="product/detail-product" element={<DetailProduct />} />
            <Route path="order" element={<Orders_admin />} />
            <Route path="order/detail-bill" element={<BillDetailadmin />} />
            <Route path="hoadon" element={<HoaDon />} />
            <Route path="hoadon/hoadon-detail" element={<HoaDonDetail />} />
            <Route path="hoadon/hoadonpdf" element={<HoaDonPDF />} />
            <Route path="blog" element={<Blog_admin />} />

            <Route path="blog/add-blog" element={<Blog />} />
            <Route path="blog/edit-blog" element={<EditBlog />} />
            <Route path="khuyenmai" element={<KhuyenMai />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="blog/blog-detail" element={<BlogDetail />} />
            <Route path="blog" element={<ListBlog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutme" element={<About />} />

            <Route exact path="/" element={<Home />} />
            <Route path="/sanpham" element={<ListOrder />} />
            {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/sanpham/:id" element={<ProductDetail />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/profile" element={<Sidebar />} />
            <Route path="/bill/:id" element={<BillDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
