import React from "react";
import { Col, Image, Row, Typography, Button } from "antd";
import Logo from "../images/Logo.png";

import { ShoppingCartOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
export default function Header() {
  const { Text } = Typography;
  return (
    <Row className="w-full h-[10vh] flex  items-center fixed z-10">
      <Col span={4} offset={1} className="flex justify-center">
        <Image
          preview={false}
          className="cursor-pointer"
          width={120}
          height={40}
          src={Logo}
        />
      </Col>
      <Col span={10} offset={5}>
        <Row className="flex justify-evenly">
          <Text className="text-[1.5rem] mx-2 font-Jose font-semibold cursor-pointer ">
            Câu chuyện
          </Text>{" "}
          <Text className="text-[1.5rem] mx-2 font-Jose font-semibold cursor-pointer ">
            Thực đơn
          </Text>{" "}
          <Text className="text-[1.5rem] mx-2 font-Jose font-semibold cursor-pointer ">
            Blog
          </Text>{" "}
          <Text className="text-[1.5rem] mx-2 font-Jose font-semibold cursor-pointer ">
            Cửa Hàng
          </Text>{" "}
          <Text className="text-[1.5rem] mx-2 font-Jose font-semibold cursor-pointer ">
            Liên Hệ
          </Text>{" "}
        </Row>
      </Col>
      <Col span={3} className="ml-9">
        <Row className="flex justify-evenly ">
          <Text className="text-[1.2rem] self-center cursor-pointer">
            Sign in
          </Text>
          <div className="border-r-[0.1rem] border-black"></div>
          <div className="cursor-pointer">
            <ShoppingCartOutlined className="text-[2.2rem]" />
          </div>
        </Row>
      </Col>
    </Row>
  );
}
