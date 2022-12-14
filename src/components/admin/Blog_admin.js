import React from "react";
import { Button, Layout, Space, Table, Tag, Spin, Image } from "antd";
import { LoadingOutlined, UserAddOutlined } from "@ant-design/icons";
import AppMenu from "../../components/admin/AppMenu";
import { getAlUser } from "../../api/admin/Users";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProfile } from "../../reducer/admin/user/userAction";
import Search from "antd/lib/input/Search";
import { fetchProduct } from "../../reducer/admin/product/productAction";
import { useNavigate } from "react-router-dom";
import { getDetailProduct } from "../../reducer/admin/product/productSlice";
import { deleteProduct } from "../../api/admin/Product";
import { getBlogAction } from "../../reducer/admin/blog/blogAction";
const Blog_admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog_admin);
  const [data, setData] = useState([]);
  const handleClickDetailProduct = (e) => {
    // const id = e.target.id;
    // const detailProduct = products.find(
    //   (item) => parseInt(item.id) === parseInt(id)
    // );
    // dispatch(getDetailProduct(detailProduct));
    // navigate("detail-product", {
    //   state: { detailProduct: detailProduct },
    // });
  };
  const handleClickDeleteProduct = async (e) => {
    // const id = e.target.id;
    // await deleteProduct(id);
    // dispatch(fetchProduct());
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const handleClickAddProduct = (e) => {
    navigate("/admin/blog/add-blog");
  };
  const columns = [
    {
      title: "Mã Blog",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="ml-10">{text}</p>,
    },
    {
      title: "Blog",
      dataIndex: "blog",
      key: "blog",
      render: (blog) => (
        <div className="flex items-center">
          {blog.Img && (
            <Image
              preview={false}
              className="w-10 h-10 mr-8"
              src={blog.Img}
              alt="Ảnh blog"
            />
          )}
          <p className="mb-0 font-semibold text-md ">{blog.tieude}</p>
        </div>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Ngày đăng",
      dataIndex: "NgayBlog",
      key: "NgayBlog",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickDetailProduct(e)}
          >
            <svg
              id={record.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                id={record.id}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickDeleteProduct(e)}
          >
            <svg
              id={record.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                id={record.id}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getBlogAction());
    console.log(blogs);
  }, []);
  useEffect(() => {
    // console.log(users);
    let listBlogs = [];
    blogs?.map((item, index) => {
      const blog = {
        key: index,
        id: item.id,
        blog: { tieude: item.TieuDe, Img: item.UrlImage },
        NgayBlog: item.NgayBlog,
        author: item.tacgia,
      };
      listBlogs.push(blog);
    });
    console.log(listBlogs);
    setData(listBlogs);
  }, [blogs]);

  return (
    <>
      <div className="w-full my-5  flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm sản phẩm"
          //   onChange={(e) => onSearch(e)}
          style={{
            marginLeft: "20px",
            width: 300,
          }}
        />
        <Button
          onClick={handleClickAddProduct}
          className="w-[12rem] flex items-center justify-center accent-[#146d4d] hover:text-[#146d4d] hover:border-[#146d4d]  ml-[20px] "
        >
          <UserAddOutlined className="h-full pr-1" />
          <p className="mb-0 h-full">Thêm Blog</p>
        </Button>
      </div>
      <div className="px-4 h-full pt-4 pb-14 bg-[#F0F2F5]">
        <p className="text-[1.3rem] font-bold mb-1">Blog</p>
        <Table
          //   pagination={false}
          style={{
            boxSizing: "padding-box",
          }}
          className="  "
          columns={columns}
          dataSource={data}
        ></Table>
        {isLoading && <Spin indicator={antIcon} />}
      </div>
    </>
  );
};

export default Blog_admin;
