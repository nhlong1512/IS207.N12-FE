import { Image, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="w-full max-w-4xl mx-auto h-[100vh]">
      <div className="w-full mb-5">
        <img
          src="https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg"
          alt="Ảnh blog"
          className="w-full h-[50vh] block object-cover"
        />
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Blog</a>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Coffeeholic</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2} className="mt-5">
        CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT
      </Title>
      <Title level={5} className="mt-5">
        Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ
        biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm
        riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh
        này.
      </Title>
      <div>
       
      </div>

      <div className="w-full flex justify-end">
        <p>Tác giả: Tín</p>
      </div>
    </div>
  );
};

export default BlogDetail;
