import React from "react";
import { Avatar, Button, Col, Image, Input, Radio, Row, Upload } from "antd";
import Title from "antd/lib/typography/Title";
const Orders = () => {
  return (
    <div className="container w-full pl-20  h-full">
      <div className="flex items-center mb-8 w-full ">
        <div className="w-full">
          <Title className=" " level={3}>
            Orders
          </Title>
          {/* <input
            // className="hidden"
            type="file"
            name="myImage"
            onChange={(e) => onChangeImage(e)}
          /> */}
          <Title className=" " level={5}>
            Your orders will be displayed here.
          </Title>
        </div>
      </div>
      <Row>
        <Col className="h-full mb-10 " span={24}>
          <Row className="w-full h-full  text-[#ABABAB] flex items-center justify-center ">
            <Col span={4}>Mã đơn hàng</Col>
            <Col className="flex justify-center" span={5}>
              Ngày thanh toán
            </Col>
            <Col className="flex justify-center" span={5}>
              Tổng cộng
            </Col>
            <Col className="flex justify-center" span={5}>
              Trạng thái
            </Col>
            <Col className="flex justify-center" span={5}>
              Hình thức thanh toán
            </Col>

            <Row className="w-full  border-t-[0.01rem] border-solid py-3  border-[#CFCFCF] ">
              <Col className="pl-10" span={4}>
                1
              </Col>
              <Col className="flex justify-center" span={5}>
                20/12/2020
              </Col>
              <Col className="flex justify-center" span={5}>
                100.000
              </Col>
              <Col className="flex justify-center" span={5}>
                Đang giao
              </Col>
              <Col className="flex justify-center" span={5}>
                COD
              </Col>
            </Row>

            <Row className="w-full  border-t-[0.01rem] border-solid py-3  border-[#CFCFCF] ">
              <Col className="pl-10" span={4}>
                1
              </Col>
              <Col className="flex justify-center" span={5}>
                20/12/2020
              </Col>
              <Col className="flex justify-center" span={5}>
                100.000
              </Col>
              <Col className="flex justify-center" span={5}>
                Đang giao
              </Col>
              <Col className="flex justify-center" span={5}>
                COD
              </Col>
            </Row>

            <Row className="w-full  border-t-[0.01rem] border-solid py-3  border-[#CFCFCF] ">
              <Col className="pl-10" span={4}>
                1
              </Col>
              <Col className="flex justify-center" span={5}>
                20/12/2020
              </Col>
              <Col className="flex justify-center" span={5}>
                100.000
              </Col>
              <Col className="flex justify-center" span={5}>
                Đang giao
              </Col>
              <Col className="flex justify-center" span={5}>
                COD
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
