import React from "react";
import { Col, Button, Image, Row, Typography } from "antd";
import Logo from "../images/Logo.png";

import CoffeImg from "../images/cup_of_coffee.png";
const Intro = () => {
  const { Text } = Typography;
  return (
    <Row className="min-h-[100vh] padding-[7rem] bg-[#333030]">
      <Col span={14} offset={2} className="mt-[18rem] z-10">
        <Text className="block text-[5.5rem] font-bold text-white">
          Step into the light
        </Text>
        <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
          with our special coffee flavour
        </Text>
        <div>
          <button className="bg-[#e92424] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
            See nearest Location
          </button>
        </div>
      </Col>
      <div className="z-0 rotate-45 w-[60rem] h-[76rem] bg-[#9abec1] rounded-[50rem] absolute top-[-28.6rem] right-[-3.8rem] overflow-y-hidden">
        <img
          className=" rotate-[-45deg] absolute h-[45rem] bottom-[15rem] left-[22rem] "
          preview={false}
          src={CoffeImg}
        />
      </div>
    </Row>
  );
};

export default Intro;
