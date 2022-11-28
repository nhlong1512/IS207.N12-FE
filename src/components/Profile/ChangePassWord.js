import React from "react";
import { Avatar, Button, Col, Image, Input, Radio, Row, Upload } from "antd";
import Title from "antd/lib/typography/Title";
const ChangePassWord = () => {
  return (
    <div className="w-full h-[135vh] ">
      <div className="flex items-center mb-8 w-full ">
        <div className="w-full">
          <Title className=" " level={3}>
            PASSWORD
          </Title>
          {/* <input
            // className="hidden"
            type="file"
            name="myImage"
            onChange={(e) => onChangeImage(e)}
          /> */}
          <div className="flex w-full justify-between">
            <Title className=" " level={5}>
              Please never share or give out your password.
            </Title>
            <Button className="w-24 h-8 rounded-lg text-white bg-[#146d4d] hover:bg-[#FF5A5F] flex items-center justify-center">
              Lưu
            </Button>
          </div>
        </div>
      </div>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Mật khẩu cũ</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="address"
            placeholder="Họ tên"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            //   onChange={(e) => handleChangeForm(e)}
            //   value={userInfo.email}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Mậy khẩu mới</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="address"
            placeholder="Email"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            //   onChange={(e) => handleChangeForm(e)}
            //   value={userInfo.email}
            required
          />
        </Col>
      </Row>

      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Xác nhận mật khẩu mơi</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="address"
            placeholder="Số điện thoại"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            //   onChange={(e) => handleChangeForm(e)}
            //   value={userInfo.email}
            required
          />
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassWord;
