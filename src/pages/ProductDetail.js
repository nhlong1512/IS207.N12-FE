import { Image } from "antd";
import React from "react";
import menu1 from "../images/menu/order1.png";
import { Card, Col, Row, Typography } from "antd";

const ProductDetail = () => {
  return (
    <div className="container h-[60vh]  items-center mx-auto ">
      <Row className="w-full">
        <Col span={12}>
          <img className="h-[50vh] w-full bg-contain" src={menu1} />
        </Col>
        <Col span={12}>a</Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
