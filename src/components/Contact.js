import React from "react";
import { Card, Col, Row, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;
export default function Contact() {
  return (
    <div className="w-full h-[60vh] relative bg-contact bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-10 after:opacity-40">
      <Col
        span={12}
        offset={12}
        className="absolute top-[18vh] left-0 right-0 bottom-0  z-20"
      >
        <Title className="text-[#146d4d] text-[3rem] font-bold">
          Liên Hệ Với Chúng Tôi
        </Title>
        <div className="flex items-center">
          <Paragraph className="text-[#fff] text-[1.2rem] font-normal ">
            Chúng tôi có thể giúp gì cho bạn? Liên hệ ngay:
          </Paragraph>
          <Paragraph className="text-[#146d4d] text-[1rem] mx-2 ">
            +(21) 255 999 8899
          </Paragraph>
        </div>
        <div className="flex h-[2.5rem] w-[15rem] justify-between">
          <Button className="text-[#fff] bg-[#000] w-[7rem] h-[2.4rem] flex justify-center items-center rounded-md ">
            Dịch vụ
          </Button>
          <Button className="text-[#146d4d] bg-[#fff] w-[7rem] h-[2.4rem] flex justify-center items-center rounded-md ">
            Liên hệ
          </Button>
        </div>
      </Col>
    </div>
  );
}
