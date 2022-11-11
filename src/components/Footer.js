import { Button, Col, Image } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React from "react";
import Input from "antd/lib/input/Input";
import Logo from "../images/Logo.png";
import {
  DoubleRightOutlined,
  FacebookFilled,
  GithubFilled,
  GooglePlusSquareFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-[#000]">
      <Col span={22} offset={1} className="h-screen">
        <div className="flex items-center h-[35vh] border-b-[0.01px] border-[#1d1f23] border-solid border-opacity-95 ">
          <div className="w-1/2 ">
            <Title className="text-[#146d4d]">Morii Coffee</Title>
            <Text className="w-[1rem] text-[#fff] opacity-80">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </Text>
          </div>
          <div className="w-1/2 flex h-[8vh]">
            <Input
              className="rounded-md bg-[#fff]"
              placeholder="Enter your Email"
              size="large"
            />
            <Button className="text-center rounded-md h-auto w-[40vh] ml-5 text-xl text-[#fff] bg-[#146d4d] flex items-center justify-center border-none">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex h-[60vh] items-center justify-center">
          <Col span={9} className="justify ">
            <Image
              preview={false}
              className="cursor-pointer w-[8rem] h-[2rem] my-5 "
              src={Logo}
            />
            <Text className="text-[#fff] w-[20rem] block my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur hic odio voluptatem tenetur consequatur.Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </Text>
            <div className="flex my-5">
              <FacebookFilled className="text-[#fff] text-2xl mr-8 " />
              <LinkedinFilled className="text-[#fff] text-2xl mr-8 " />
              <TwitterSquareFilled className="text-[#fff] text-2xl mr-8 " />
              <GooglePlusSquareFilled className="text-[#fff] text-2xl mr-8 " />
              <GithubFilled className="text-[#fff] text-2xl mr-8 " />
            </div>
          </Col>
          <Col span={5}>
            <Title level={3} className="text-[#fff] mb-10 mt-8">
              Dịch vụ
            </Title>
            <div className="flex justify-between my-7 block">
              <div className="flex-col ">
                <div className=" my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Câu chuyện</Text>
                </div>
                <div className=" my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Dịch vụ</Text>
                </div>
                <div className=" my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Menu</Text>
                </div>
                <div className=" my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Về Cửa Hàng</Text>
                </div>
              </div>
              <div className="flex-col">
                <div className="my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Blog</Text>
                </div>
                <div className="my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Giúp Đỡ</Text>
                </div>
                <div className="my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Công Việc</Text>
                </div>
                <div className="my-2">
                  <DoubleRightOutlined className="text-[#fff]" />
                  <Text className="text-[#fff] ml-2">Liên Hệ</Text>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6} offset={4} className=" self-center  ">
            <Title level={3} className="text-[#fff] mb-10 mt-7">
              Thông tin liên hệ
            </Title>
            <div className="flex-col block my-8">
              <Text className="text-[#CCCCCC] my-2 ">
                Address: 2512 Ninh Kieu, Thu Duc, TP.HCM
              </Text>
              <div className="my-4">
                <Text className="text-[#CCCCCC] mr-2  ">Phone:</Text>
                <Text className="text-[#fff]">+24 1600-33-999</Text>
              </div>
              <div className="my-4">
                <Text className="text-[#CCCCCC] mr-2  ">E-mail:</Text>
                <Text className="text-[#fff]">moriiCoffee@gmail.com</Text>
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
