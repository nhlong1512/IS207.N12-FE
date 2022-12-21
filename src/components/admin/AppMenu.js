import React, { useEffect, useState } from "react";
import Logo from "../../images/Logo.png";
import { Avatar, Image, Layout, Menu, message, Modal } from "antd";
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
import { getUserProfile } from "../../reducer/user/userAction";
const { Sider } = Layout;

const AppMenu = () => {
  const accessToken = localStorage.getItem("accessToken");
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
  useEffect(() => {
    console.log("user", user);
    if (window.localStorage.getItem("accessToken") != null) {
      if (user.hoten == null) {
        dispatch(getUserProfile());
      }
    }
  }, [user]);
  const confirm = () => {
    Modal.confirm({
      title: "Warning",
      content: "Are you sure you want to sign out?",
      cancelText: "Cancel",
      onOk: logout,
    });
  };

  // const staffManage = () => {
  //   if (user.role === "quanli") redirectTo("staff");
  //   else message.error("Nhân viên không có quyền truy cập");
  // };
  // const discountManage = () => {
  //   if (user.role === "quanli") redirectTo("khuyenmai");
  //   else message.error("Nhân viên không có quyền truy cập");
  // };
  const logout = () => {
    localStorage.removeItem("cartItems");
    navigate("/signin");
  };

  const navigaStaff = () => {
    const role = window.localStorage.getItem("role");
    if (role != "admin") message.error("Bạn không có quyền truy cập");
    else navigate("/staff");
  };

  const navigateKhuyenMai = () => {
    const role = window.localStorage.getItem("role");
    if (role != "admin") message.error("Bạn không có quyền truy cập");
    else navigate("/khuyenmai");
  };
  // Return menu items here
  const items = [
    getItem(
      "Blog",
      "6",
      <div className="w-full flex items-center  my-2">
        <Avatar
          size={40}
          src={
            <Image
              preview={false}
              src={user.urlavt}
              alt="avatar"
              width={40}
              height={40}
            ></Image>
          }
          className="mr-2"
        ></Avatar>
        <p className="mb-0 text-[#fff] flex justify-center items-center">
          {user.hoten}
        </p>
      </div>,
      () => redirectTo("profile")
    ),
    getItem("Dashboard", "0", <MdSpaceDashboard />, () => redirectTo("")),
    getItem("Đặt hàng", "1", <MdFastfood />, () => redirectTo("order")),
    getItem("Hóa đơn", "2", <GiFoodTruck />, () => redirectTo("hoadon")),
    getItem("Sản phẩm", "3", <AppstoreOutlined />, () => redirectTo("product")),
    getItem("Khách hàng", "4", <UserOutlined />, () => redirectTo("user")),
    getItem("Nhân viên", "5", <IdcardOutlined />, () => {
      navigaStaff();
    }),
    getItem("Blog", "6", <TbDiscount2 />, () => redirectTo("blog")),
    getItem("Khuyến mãi", "7", <TbDiscount2 />, () => {
      navigateKhuyenMai();
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
      case "Hồ sơ":
        return ["8"];
      default:
        return ["9"];
    }
  };

  return (
    <Sider
      className=""
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex  justify-center  px-6  ">
        <img
          src={Logo}
          alt="Application Logo"
          className=" object-contain h-[93px] w-[96px] "
        />
        {/* <h1
          className={`text-white font-extrabold transition-opacity duration-100 ${
            collapsed ? "absolute opacity-0" : ""
          }`}
        >
          Morrii Coffee
        </h1> */}
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
