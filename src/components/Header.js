import React from "react";
import { Col, Image, Row, Typography } from "antd";
import Logo from "../images/Logo.png";
export default function Header() {
  const { Text } = Typography;
  return (
    <Row className="w-full h-[10vh] flex items-center fixed z-10">
      <Col span={4} offset={2}>
        <Image className="cursor-pointer" width={100} height={40} src={Logo} />
      </Col>
      <Col span={9} offset={8}>
        <Row className="flex justify-evenly">
          <Text className="text-[18px] font-Jose font-semibold cursor-pointer ">
            Câu chuyện
          </Text>{" "}
          <Text className="text-[18px] font-Jose font-semibold cursor-pointer ">
            Thực đơn
          </Text>{" "}
          <Text className="text-[18px] font-Jose font-semibold cursor-pointer ">
            Blog
          </Text>{" "}
          <Text className="text-[18px] font-Jose font-semibold cursor-pointer ">
            Cửa Hàng
          </Text>{" "}
          <Text className="text-[18px] font-Jose font-semibold cursor-pointer ">
            Liên Hệ
          </Text>{" "}
        </Row>
      </Col>
    </Row>
  );
}
