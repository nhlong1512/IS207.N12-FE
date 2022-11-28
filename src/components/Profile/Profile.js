import { Avatar, Col, Image, Input, Radio, Row, Upload } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import "../../App.css";
const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbenhviennhitrunguong.gov.vn%2Fwp-content%2Fuploads%2F2019%2F10%2FKien-Ba-Khoang-2-1.jpg&imgrefurl=https%3A%2F%2Fbenhviennhitrunguong.gov.vn%2Fcanh-giac-voi-kien-ba-khoang.html&tbnid=CkVHYXzDOVEJtM&vet=12ahUKEwis1vu8ltH7AhURCt4KHXuuCsEQMygBegQIARA9..i&docid=s5adQd_znZdtsM&w=640&h=384&q=kieens&ved=2ahUKEwis1vu8ltH7AhURCt4KHXuuCsEQMygBegQIARA9"
  );
  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-full h-[135vh] ">
      <div className="flex items-center mb-6  ">
        <Avatar
          src={
            <Image
              preview={false}
              className="w-36 h-36"
              src={selectedImage}
              alt="avatar"
            />
          }
          className="w-36 h-36 mr-8"
        />
        <div>
          <Title className=" " level={3}>
            PROFILE
          </Title>
          {/* <input
            // className="hidden"
            type="file"
            name="myImage"
            onChange={(e) => onChangeImage(e)}
          /> */}
          <Title className=" " level={5}>
            Update your photo and personal details.
          </Title>
        </div>
      </div>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Họ và tên</Title>
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
          <Title level={5}>Email</Title>
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
      <Row className="w-full mb-8 flex items-center my-5">
        <Col span={6} className="">
          <Title className="w-full  my-auto " level={5}>
            Ảnh đại diện
          </Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-full justify-between ">
            <Avatar
              src={
                <Image
                  preview={false}
                  className="w-16 h-16"
                  src={selectedImage}
                  alt="avatar"
                />
              }
              className="w-16 h-16 "
            />
            <p className="mb-0 w-[25rem]">
              This will be displayed on your profile.
            </p>
            <input
              className="w-[16rem] pl-5 "
              type="file"
              name="myImage"
              onChange={(e) => onChangeImage(e)}
            />
          </div>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Số điện thoại</Title>
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
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Địa chỉ</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="address"
            placeholder="Địa chỉ"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            //   onChange={(e) => handleChangeForm(e)}
            //   value={userInfo.email}
            required
          />
        </Col>
      </Row>
      <Row>
        <Col span={6} className="">
          <Title level={5}>Tỉnh/Thành Phố</Title>
        </Col>
        <Col span={18}>
          <Row gutter={35}>
            <Col span={8}>
              <Input
                type="text"
                size="medium"
                name="Provice"
                placeholder="Tỉnh/Thành phố"
                className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
                //   onChange={(e) => handleChangeForm(e)}
                //   value={userInfo.email}
                required
              />
            </Col>
            <Col span={8}>
              <Input
                type="text"
                size="medium"
                name="Provice"
                placeholder="Quận/Huyện"
                className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
                //   onChange={(e) => handleChangeForm(e)}
                //   value={userInfo.email}
                required
              />
            </Col>
            <Col span={8}>
              <Input
                type="text"
                size="medium"
                name="Provice"
                placeholder="Phường/Xã"
                className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
                //   onChange={(e) => handleChangeForm(e)}
                //   value={userInfo.email}
                required
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center  ">
        <Col span={6} className="">
          <Title level={5}>Giới tính</Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-ful ">
            <input
              id="nam"
              type="radio"
              name="gender"
              value="nam"
              className=" mr-1 accent-[#146d4d] w-4 h-4  "
            />
            <label for="nam">Nam</label>
            <input
              id="nu"
              type="radio"
              name="gender"
              value="nu"
              className="ml-10 mr-1 accent-[#146d4d] w-4 h-4 "
            />
            <label for="nu">Nữ</label>
          </div>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Ngày sinh</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="address"
            placeholder="27/12/2003"
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

export default Profile;
