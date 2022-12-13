import React from "react";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Radio,
  Row,
  Upload,
  Spin,
  message,
  Popconfirm,
} from "antd";
import Title from "antd/lib/typography/Title";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import axios from "axios";

const Blog = () => {
  const { TextArea } = Input;
  const [userInfo, setUserInfo] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const handleChangeForm = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  };
  const onChangeImage = async (e) => {
    // setIsFirst(false);
    console.log(e.target.files[0]);
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(urlImage);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "themorrii");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dql5y1xex/image/upload",
      formData
    );
    const url = res.data.secure_url;
    setUserInfo({ ...userInfo, urlavt: url });
    console.log(url);

    setUserInfo({
      ...userInfo,
      urlavt: urlImage,
    });
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="container w-full mx-auto max-w-[800px] mt-5 ">
      <Title className="font-bold " level={2}>
        Thêm Mới Blog
      </Title>
      <Row className="w-full mb-8 flex items-center my-5">
        <Col span={6} className="">
          <Title className="w-full  my-auto " level={5}>
            Ảnh Blog
          </Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-full justify-between ">
            {userInfo.urlavt && (
              <Image
                preview={false}
                className="w-16 h-16"
                src={userInfo.urlavt}
                alt="avatar"
              />
            )}

            <p className="mb-0 w-[25rem]">Đây sẽ là ảnh Blog của bạn</p>
            <input
              className="w-[16rem] pl-5 "
              type="file"
              name="urlavt"
              onChange={(e) => onChangeImage(e)}
            />
          </div>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Tiêu đề</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="hoten"
            placeholder="Tiêu đề"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            // value={userInfo.hoten}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Mô tả</Title>
        </Col>
        <Col span={18}>
          <TextArea
            rows={3}
            type="text"
            size="medium"
            name="hoten"
            placeholder="Mô tả"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            // value={userInfo.hoten}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8  items-center ">
        <Col span={6} className="">
          <Title level={5}>Nội Dung</Title>
        </Col>
        <Col span={18}>
          <CKEditor
            editor={ClassicEditor}
            // data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </Col>
      </Row>

      <div className="flex h-[40px] justify-end">
        <Button className="bg-[#146d4d] text-[#fff]">Tạo Blog</Button>
      </div>
    </div>
  );
};

export default Blog;
