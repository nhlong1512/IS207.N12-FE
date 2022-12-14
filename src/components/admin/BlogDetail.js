import { Image, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllBlogs } from "../../api/admin/Blog";

const BlogDetail = () => {
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState({});
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
      }
    };
    getBlogDetail();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto h-[100vh]">
      <div className="w-full mb-5">
        <img
          src={data.UrlImage}
          alt="Ảnh blog"
          className="w-full h-[50vh] block object-cover"
        />
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/blog">Blog</a>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Coffeeholic</Breadcrumb.Item>
      </Breadcrumb>
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
