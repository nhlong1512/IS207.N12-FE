import React, { useState, useEffect, useCallback, useRef } from "react";
import { div, Image, Typography, Button, Avatar } from "antd";
import Logo from "../images/Logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getUserProfile } from "../reducer/user/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { Text } = Typography;
  const [y, setY] = useState(0);
  // const [bgNav, setBgNav] = useState("");
  // const [txtNav, setTxtNav] = useState("text-[#fff]");
  // const [borderNav, setBorderNav] = useState("border-white");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [bgNav, setBgNav] = useState("bg-[#fff]");
  const [txtNav, setTxtNav] = useState("text-[#000]");
  const [borderNav, setBorderNav] = useState("border-[#000]");
  const [isShơwDropdown, setIsShơwDropdown] = useState(false);
  const handleClickProfile = () => {
    setIsShơwDropdown(!isShơwDropdown);
  };
  useEffect(() => {
    console.log("user", user);
    if (window.localStorage.getItem("accessToken") != null) {
      if (user.hoten == null) {
        dispatch(getUserProfile());
      }
    }
  }, [user]);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      console.log(y);
      console.log(window.scrollTop);
      if (y > 80) {
        setBgNav("bg-[#fff]");
        setTxtNav("text-[#000]");
        setBorderNav("border-[#000]");
      } else {
        // setBgNav("");
        // setTxtNav("text-[#fff]");
        // setBorderNav("border-white");
        setBgNav("bg-[#fff]");
        setTxtNav("text-[#000]");
        setBorderNav("border-[#000]");
      }
      setY(window.scrollTop);
    },
    [y]
  );

  useEffect(() => {
    setY(document.body.scrollTop);
    document.body.addEventListener("scroll", handleNavigation);

    return () => {
      document.body.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div
      className={`w-full h-[10vh] ${bgNav}  flex justify-around items-center fixed z-50 `}
    >
      <Link to="/">
        <div className="flex pl-[0.4rem]">
          <Image
            preview={false}
            className="cursor-pointer w-[8rem] h-[2rem]"
            src={Logo}
          />
        </div>
      </Link>
      <div>
        <div className="flex justify-evenly w-[38rem]">
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Câu chuyện
          </Text>
          <Link to="/order">
            <Text
              className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
            >
              Thực đơn
            </Text>
          </Link>
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Blog
          </Text>
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Cửa Hàng
          </Text>
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Liên Hệ
          </Text>
        </div>
      </div>
      <div className="ml-9 w-[11rem]">
        <div className="flex justify-evenly ">
          {/* a triangle by taiwind css */}
          <div>
            <div
              className={`fixed top-[3.8rem] right-[6rem]
              z-[1000] w-[10rem] rounded-md shadow-xl
                 h-[10rem] bg-[#146d4d] text-[#fff] before:fixed before:content-[''] before:top-[3.3rem] before:right-[8.3rem]  before:border-solid before:w-0 before:h-0 before:border-x-[8px] before:border-b-[8px] before:border-x-transparent before:border-b-[#146d4d] ${
                   isShơwDropdown ? "" : "hidden "
                 } `}
            >
              <a
                className="text-[#fff] flex items-center pl-[0.4rem] py-2 hover:bg-white hover:opacity-90 hover:text-[#146d4d] hover:font-bold"
                href="#"
              >
                <div className="w-6 h-6 mr-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="mb-0">Tài khoản của tôi</p>
              </a>
              <a
                className="text-[#fff] flex items-center pl-[0.4rem] py-2 hover:bg-white hover:opacity-90 hover:text-[#146d4d] hover:font-bold"
                href="#"
              >
                <div className="w-6 h-6 mr-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <p className="mb-0">Đổi Mật Khẩu</p>
              </a>
              <a
                className="text-[#fff] flex items-center pl-[0.4rem] py-2 hover:bg-white hover:opacity-90 hover:text-[#146d4d] hover:font-bold"
                href="#"
              >
                <div className="w-6 h-6 mr-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <p className="mb-0">Đơn Đặt</p>
              </a>
              <a
                className="text-[#fff] flex items-center pl-[0.4rem] py-2 hover:bg-white hover:opacity-90 hover:text-[#146d4d] hover:font-bold"
                href="#"
              >
                <div className="w-6 h-6 mr-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </div>
                <p className="mb-0">Đăng xuất</p>
              </a>
            </div>
            {isAuthenticated && (
              <div
                onClick={handleClickProfile}
                className="flex items-center w-8rem "
              >
                {user && (
                  <p className="text-[#000] mb-0 mr-3 mt-2 cursor-pointer">
                    {user.hoten}
                  </p>
                )}
                <Avatar
                  className={`cursor-pointer  ${
                    isAuthenticated ? "" : "hidden"
                  } `}
                  src={
                    <Image
                      preview={false}
                      src="https://joeschmoe.io/api/v1/random"
                      style={{
                        width: 32,
                      }}
                    />
                  }
                />
              </div>
            )}
          </div>
          <Link to="/signin">
            <Button
              className={`bg-[#146d4d]  rounded-md py-[1rem]  flex justify-center items-center text-[#fff] text-[0.7rem] font-bold ${
                isAuthenticated ? "hidden" : ""
              }`}
            >
              Đăng Nhập
            </Button>
          </Link>
          <div className={`border-r-[0.1rem] border-solid ${borderNav} `}></div>
          <Link to="/cart">
            <div className={`cursor-pointer ${txtNav} ml-4`}>
              <ShoppingCartOutlined className="text-[1.8rem] " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
