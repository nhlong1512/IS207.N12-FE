import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Button } from "antd";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import { useLayoutEffect } from "react";
const excludeHeaderFooterPath = [
  "/signin",
  "/signup",
  "/forgotpassword",
  "/storelocator",
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
      {getHeader()}
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Wrapper>
      {getFooter()}
    </>
  );
}

export default App;
