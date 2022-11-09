import React, { useState, useEffect, useCallback, useRef } from "react";
import { div, Image, Typography, Button } from "antd";
import Logo from "../images/Logo.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Header() {
  const { Text } = Typography;

  const [y, setY] = useState(document.body.scrollY);
  const [bgNav, setBgNav] = useState("");
  const [txtNav, setTxtNav] = useState("text-black");
  const [borderNav, setBorderNav] = useState("border-white");
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < window.scrollY) {
        setBgNav("bg-[#CC9966]");
        setTxtNav("text-[#222]");
        setBorderNav("border-[#222]");
      } else if (y > window.scrollY) {
        setBgNav("");
        setTxtNav("text-[#CC9966]");
        setBorderNav("border-white");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(document.body.scrollY);
    document.body.addEventListener("scroll", handleNavigation);

    return () => {
      document.body.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="w-full h-[10vh]  flex justify-around bg-transparent items-center fixed z-10 ">
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
            className={`text-[1.3rem] text-[#B8860B] mx-2 font-Jose font-normal cursor-pointer `}
          >
            Câu chuyện
          </Text>
          <Text
            className={`text-[1.3rem] text-[#B8860B] mx-2 font-Jose font-normal cursor-pointer `}
          >
            Thực đơn
          </Text>
          <Text
            className={`text-[1.3rem] text-[#B8860B] mx-2 font-Jose font-normal cursor-pointer `}
          >
            Blog
          </Text>
          <Text
            className={`text-[1.3rem] text-[#B8860B] mx-2 font-Jose font-normal cursor-pointer `}
          >
            Cửa Hàng
          </Text>
          <Text
            className={`text-[1.3rem] text-[#B8860B] mx-2 font-Jose font-normal cursor-pointer `}
          >
            Liên Hệ
          </Text>
        </div>
      </div>
      <div className="ml-9 w-[9rem]">
        <div className="flex justify-evenly ">
          <Text
            className={`text-[1.1rem] text-[#B8860B] self-center cursor-pointer`}
          >
            Đăng nhập
          </Text>
          <div className="border-r-[0.1rem] border-[#B8860B]"></div>
          <div className={`cursor-pointer text-[#B8860B]`}>
            <ShoppingCartOutlined className="text-[1.8rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}
