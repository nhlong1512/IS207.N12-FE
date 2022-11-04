import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
