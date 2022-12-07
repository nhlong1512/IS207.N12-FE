import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import { Layout, Menu, Modal } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdFastfood } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
const { Sider } = Layout;

const AppMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function getItem(label, key, icon, onClick, style, children) {
    return {
      key,
      icon,
      children,
      label,
      onClick,
      style,
    };
  }

  const redirectTo = (path) => {
    navigate("/admin/" + path);
  };

  const dispatch = useDispatch();

  const confirm = () => {
    Modal.confirm({
      title: "Warning",
      content: "Are you sure you want to sign out?",
      cancelText: "Cancel",
      onOk: logout,
    });
  };

  const logout = () => {
    navigate("/signin");
  };

  // Return menu items here
  const items = [
    getItem("Order", "1", <MdFastfood />, () => redirectTo("order")),
    getItem("All Orders", "2", <GiFoodTruck />, () => redirectTo("all-orders")),
    getItem("Product", "3", <AppstoreOutlined />, () => redirectTo("product")),
    getItem("User", "4", <UserOutlined />, () => redirectTo("user")),
    getItem("Staff", "5", <IdcardOutlined />, () => redirectTo("staff")),
    getItem("Promotion", "6", <TbDiscount2 />, () => redirectTo("promotion")),
    getItem("Statistic", "7", <IoIosStats />, () => redirectTo("statistic")),
    getItem("Sign out", "8", <LogoutOutlined />, () => confirm(), {
      backgroundColor: "transparent",
    }),
  ];

  const getDefaultSelectedKeys = () => {
    const pathname = location.pathname.substring(1);
    switch (pathname) {
      case "order":
        return ["1"];
      case "all-orders":
        return ["2"];
      case "product":
        return ["3"];
      case "user":
        return ["4"];
      case "staff":
        return ["5"];
      case "promotion":
        return ["6"];
      case "statistic":
        return ["7"];
      default:
        return ["8"];
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex  justify-center gap-4 p-6">
        <img src={Logo} alt="Application Logo" className="w-9 h-5" />
        <h1
          className={`text-white font-extrabold transition-opacity duration-100 ${
            collapsed ? "absolute opacity-0" : ""
          }`}
        >
          Morrii Coffee
        </h1>
      </div>
      <Menu
        theme="dark"
        selectedKeys={getDefaultSelectedKeys()}
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};

export default AppMenu;
