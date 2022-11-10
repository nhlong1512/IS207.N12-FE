import React, { useState, useEffect, useCallback, useRef } from "react";
import { div, Image, Typography, Button } from "antd";
import Logo from "../images/Logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Header() {
  const { Text } = Typography;
  const [y, setY] = useState(0);
  const [bgNav, setBgNav] = useState("");
  const [txtNav, setTxtNav] = useState("text-[#fff]");
  const [borderNav, setBorderNav] = useState("border-white");
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
        setBgNav("");
        setTxtNav("text-[#fff]");
        setBorderNav("border-white");
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
          <Text
            className={`text-[1.1rem] ${txtNav} self-center cursor-pointer`}
          >
            Đăng nhập
          </Text>
          <div className={`border-r-[0.1rem]${borderNav} `}></div>
          <div className={`cursor-pointer ${txtNav}`}>
            <ShoppingCartOutlined className="text-[1.8rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}
