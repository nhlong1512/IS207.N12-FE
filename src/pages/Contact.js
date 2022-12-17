import { Breadcrumb, Button, Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto max-w-[1124px] pt-20 pb-16">
      <Breadcrumb className="  mb-10 text-base">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Blog</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="w-full">
        <Col span={11}>
          <Title className="mb-0 text-[#146d4d] " level={2}>
            Liên hệ Morii
          </Title>
          <p className="mb-0 opacity-70">
            Xin chào, chúng tôi sẵn sàng phục vụ quý khách 24/7 qua Email và Số
            điện thoại...
          </p>
          <p className=" mt-3 mb-0">
            Để biết thêm thông tin hoặc thắc mắc về dự án sản phẩm của chúng tôi
            và giá cả, vui lòng liên hệ với chúng tôi.
          </p>
          <div className="mt-3">
            <p className="mb-0">Email:</p>
            <p className="mb-0 opacity-70">moriicoffeee@gmail.com</p>
          </div>
          <div className="mt-3">
            <p className="mb-0">Địa chỉ:</p>
            <p className="mb-0 opacity-70">
              Hẻm 12/24 Đ. số 9, Linh Trung, Thủ Đức, TPHCM
            </p>
          </div>
          <div className="mt-3">
            <p className="mb-0">Liên hệ:</p>
            <p className="mb-0 opacity-70">+(84) 77 550 550</p>
          </div>
        </Col>
        <Col span={12} offset={1}>
          <Title className="mb-0 text-[#146d4d] " level={2}>
            Gửi thông tin cho Morii
          </Title>
          <Input
            size="medium"
            name="email"
            type="email"
            placeholder="Họ tên"
            className="rounded-md py-2 mt-5 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-3  "
            required
          />
          <Row className="w-full my-3">
            <Col span={11}>
              <Input
                size="medium"
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-md py-2 mt-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-3  "
                required
              />
            </Col>
            <Col span={11} offset={2}>
              <Input
                size="medium"
                name="email"
                type="email"
                placeholder="SĐT"
                className="rounded-md py-2 my-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-3  "
                required
              />
            </Col>
          </Row>
          <TextArea placeholder="Nội dung" className="mt-3" rows={4} />
          <div className="w-full mt-4 flex justify-end ">
            <Button className="bg-[#146d4d] px-5 rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold">
              Gửi
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
