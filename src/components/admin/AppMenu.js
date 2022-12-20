import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import { Layout, Menu, message, Modal } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdFastfood, MdSpaceDashboard } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import { IoIosStats } from "react-icons/io";
const { Sider } = Layout;

const AppMenu = () => {
  const { user } = useSelector((state) => state.user);
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

  const staffManage = () => {
    if (user.role === "admin") redirectTo("staff");
    message.error("Nhân viên không có quyền truy cập");
  };
  const discountManage = () => {
    if (user.role === "admin") redirectTo("khuyenmai");
    message.error("Nhân viên không có quyền truy cập");
  };
  const logout = () => {
    navigate("/signin");
  };

  // Return menu items here
  const items = [
    getItem("Dashboard", "0", <MdSpaceDashboard />, () => redirectTo("")),
    getItem("Đặt hàng", "1", <MdFastfood />, () => redirectTo("order")),
    getItem("Hóa đơn", "2", <GiFoodTruck />, () => redirectTo("hoadon")),
    getItem("Sản phẩm", "3", <AppstoreOutlined />, () => redirectTo("product")),
    getItem("Khách hàng", "4", <UserOutlined />, () => redirectTo("user")),
    getItem("Nhân viên", "5", <IdcardOutlined />, () => {
      staffManage();
    }),
    getItem("Blog", "6", <TbDiscount2 />, () => redirectTo("blog")),
    getItem("Khuyến mãi", "7", <TbDiscount2 />, () => {
      discountManage();
    }),
    getItem("Đăng xuất", "8", <LogoutOutlined />, () => confirm(), {
      backgroundColor: "transparent",
    }),
  ];

  const getDefaultSelectedKeys = () => {
    const pathname = location.pathname.substring(1);
    switch (pathname) {
      case "Đặt hàng":
        return ["1"];
      case "Hóa đơn":
        return ["2"];
      case "Sản phẩm":
        return ["3"];
      case "Khách hàng":
        return ["4"];
      case "Nhân viên":
        return ["5"];
      case "Blog":
        return ["6"];
      case "Khuyến mãi":
        return ["7"];

      default:
        return ["8"];
    }
  };

  return (
    <Sider
      className=""
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
        className=" h-full"
        selectedKeys={getDefaultSelectedKeys()}
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};

export default AppMenu;
