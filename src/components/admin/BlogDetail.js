import { LoadingOutlined } from "@ant-design/icons";
import { Image, Breadcrumb, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getAllBlogs } from "../../api/admin/Blog";

import "./blogDetail.css";

const BlogDetail = () => {
  const { user } = useSelector((state) => state.user);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getBlogDetail = async () => {
      const res = await getAllBlogs();
      const listBlog = res.blog;
      const detailBlog = listBlog.find(
        (blog) => parseInt(blog.id) === parseInt(id)
      );
      console.log("tin", detailBlog);
      if (res.status === true) {
        setData(detailBlog);
        setIsLoading(false);
      }
    };
    getBlogDetail();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto h-full">
      {user.role === "quanli" && (
        <Breadcrumb className="pt-20 mb-5">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/admin/blog">Blog</a>
          </Breadcrumb.Item>

          <Breadcrumb.Item>Coffeeholic</Breadcrumb.Item>
        </Breadcrumb>
      )}
      {user.role === "khachhang" && (
        <Breadcrumb className="pt-20 mb-5">
          <Breadcrumb.Item>
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/blog">Blog</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>Coffeeholic</Breadcrumb.Item>
        </Breadcrumb>
      )}

      {isLoading && <Spin indicator={antIcon} />}
      <div className="w-full mb-5">
        <img
          src={data.UrlImage}
          alt="Ảnh blog"
          className="w-full h-[50vh] block object-cover"
        />
      </div>

      <Title level={2} className="mt-5">
        {data.TieuDe}
      </Title>
      <p>{data.NgayBlog}</p>
      <Title level={5} className="mt-5">
        {data.MoTa}
      </Title>
      <div>
        <td dangerouslySetInnerHTML={{ __html: data.NoiDung }} />
      </div>

      <div className="w-full flex justify-end">
        <p>Tác giả: {data.tacgia}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
