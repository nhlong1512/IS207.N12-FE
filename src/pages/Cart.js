import { Col, Row, InputNumber, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { Card } from "antd";
import order1 from "../images/menu/order1.png";
import order2 from "../images/menu/order2.png";
import Product from "../components/productInCart/product";
const { Meta } = Card;
const Cart = () => {
  const [quantityProduct, setQuantityProduct] = useState(1);
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <div className="container  h-full  max-w-[1024px] mx-auto mt-20 ">
      <Title level={2} className="text-black">
        Giỏ hàng
      </Title>

      <Row gutter={35} className="h-full">
        <Col className="h-full mb-10 " span={16}>
          <Row className="w-full h-[10vh] border-y-[0.01rem] border-solid border-[#CFCFCF] text-[#ABABAB] flex items-center justify-center ">
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
          {cartItems.map((item) => (
            <Product item={item} id={item.id} />
          ))}
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
