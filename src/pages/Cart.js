import { Col, Row, InputNumber, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Card } from "antd";
import order1 from "../images/menu/order1.png";
import order2 from "../images/menu/order2.png";
const { Meta } = Card;
const Cart = () => {
  return (
    <div className="container  h-full  max-w-[1024px] mx-auto mt-20 ">
      <Title level={2} className="text-black">
        Giỏ hàng
      </Title>

      <Row gutter={35} className="h-full">
        <Col className="h-full " span={16}>
          <Row className="w-full h-[6.5vh] border-y-[0.01rem] border-solid border-[#CFCFCF] text-[#ABABAB] flex items-center justify-center ">
            <Col span={12}>PRODUCT DETAILS</Col>
            <Col className="flex justify-center" span={4}>
              QUANTITY
            </Col>
            <Col className="flex justify-center" span={4}>
              TOTAL
            </Col>
            <Col className="flex justify-center" span={4}>
              REMOVE
            </Col>
          </Row>
          <Row className="w-full mt-8  text-[#000] flex items-center">
            <Col className="flex items-center " span={12}>
              <div className="w-1/2">
                <img className="w-32 h-w-32" src={order1} />
              </div>
              <div className="w-1/2">
                <p className="text-[#000] font-bold text-[1.2rem] mb-6">
                  Cà phê sữa đá
                </p>
                <p className="text-[#146d4d] text-[1rem] mt-4 mb-0">30000VND</p>
              </div>
            </Col>
            <Col className="flex justify-center" span={4}>
              <InputNumber
                className="w-[4rem] h-[2rem] text-[#000]"
                min={1}
                max={10}
                defaultValue={3}
                size="medium"
              />
            </Col>
            <Col
              className="text-[#146d4d] text-[1rem] flex justify-center"
              span={4}
            >
              30000 VND
            </Col>
            <Col className=" flex justify-center" span={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Col>
          </Row>
          <Row className="w-full h-full mt-8 text-[#000] flex items-center">
            <Col className="flex items-center " span={12}>
              <div className="w-1/2">
                <img className="w-32 h-w-32" src={order2} />
              </div>
              <div className="w-1/2">
                <p className="text-[#000] font-bold text-[1.2rem] mb-6">
                  Trà Vải
                </p>
                <p className="text-[#146d4d] text-[1rem] mt-4 mb-0">30000VND</p>
              </div>
            </Col>
            <Col className="flex justify-center" span={4}>
              <InputNumber
                className="w-[4rem] h-[2rem] text-[#000]"
                min={1}
                max={10}
                defaultValue={3}
                size="medium"
              />
            </Col>
            <Col
              className="text-[#146d4d] text-[1rem] flex justify-center"
              span={4}
            >
              30000 VND
            </Col>
            <Col className=" flex justify-center" span={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Col>
          </Row>
        </Col>
        <Col className="h-full " span={8}>
          <div className="w-full px-6 h-[70vh] border-[1px] border-solid border-[#F5F5F6] bg-[#F5F5F6] rounded-2xl ">
            <Title
              className="border-b-[0.01rem] border-solid border-[#C6BDBD] py-3 mt-3"
              level={5}
            >
              ORDER SUMMARY
            </Title>
            <div className="w-full border-b-[0.01rem] pb-16 border-solid border-[#C6BDBD] ">
              <div className="w-full flex mt-10 justify-between ">
                <p>PHỤ THU</p>
                <p>5.000 VND</p>
              </div>
              <div className="w-full flex mt-10 justify-between ">
                <p>THUẾ GTGT</p>
                <p>5.000 VND</p>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>TỔNG CỘNG</p>
              <p>5.000 VND</p>
            </div>
            <Button className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold">
              CHECKOUT
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
