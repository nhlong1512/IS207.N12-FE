import React, { useState, useEffect, useCallback, useRef } from "react";
import { div, Image, Typography, Button, Avatar } from "antd";
import Logo from "../images/Logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Header() {
  const { Text } = Typography;
  const [y, setY] = useState(0);
  // const [bgNav, setBgNav] = useState("");
  // const [txtNav, setTxtNav] = useState("text-[#fff]");
  // const [borderNav, setBorderNav] = useState("border-white");
  const [bgNav, setBgNav] = useState("bg-[#fff]");
  const [txtNav, setTxtNav] = useState("text-[#000]");
  const [borderNav, setBorderNav] = useState("border-[#000]");
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
      <div className="flex justify-center">
        <Image
          preview={false}
          className="cursor-pointer w-[8rem] h-[2rem]"
          src={Logo}
        />
      </div>
      <div>
        <div className="flex justify-evenly w-[38rem]">
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Câu chuyện
          </Text>
          <Text
            className={`text-[1.3rem] ${txtNav} mx-2 font-Jose font-normal cursor-pointer `}
          >
            Thực đơn
          </Text>
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
      <div className="ml-9 w-[9rem]">
        <div className="flex justify-evenly ">
          {/* a triangle by taiwind css */}
          <div
            className="after:fixed after:content-[''] after:top-[3.7rem] after:right-[8rem]
            after:bottom-0 after:z-[1000] after:w-[8rem] after:rounded-md
            after:h-[6rem] after:bg-orange-400  before:absolute before:content-[''] before:top-[2.7rem]
             before:border-x-transparent before:border-t-transparent before:border-solid before:w-0 before:h-0 before:right-[10rem]  before:bg-none before:border-t-red-900 before:border-t-[8px]
             before:border-x-[8px] before:border-x-orange-500 before:border-b-[8px] before:border-b-orange-400"
          >
            <Avatar
              className="cursor-pointer  "
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
          <Text
            className={`text-[1.1rem] ${txtNav}  self-center cursor-pointer hidden`}
          >
            Đăng nhập
          </Text>
          <div className={`border-r-[0.1rem] border-solid ${borderNav} `}></div>
          <div className={`cursor-pointer ${txtNav}`}>
            <ShoppingCartOutlined className="text-[1.8rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}
