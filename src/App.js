import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
