import React from "react";
import {
  Button,
  Layout,
  Space,
  Table,
  Tag,
  Spin,
  Image,
  Modal,
  notification,
  message,
} from "antd";
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
import {
  getDetailProduct,
  onFilterProduct,
} from "../../reducer/admin/product/productSlice";
import { deleteProduct } from "../../api/admin/Product";
const Products_admin = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product_admin);
  const [data, setData] = useState([]);
  const handleClickDetailProduct = (e) => {
    const id = e.target.id;
    const detailProduct = products.find(
      (item) => parseInt(item.id) === parseInt(id)
    );
    dispatch(getDetailProduct(detailProduct));
    navigate("detail-product", {
      state: { detailProduct: detailProduct },
    });
  };
  const handleClickDeleteProduct = async (e) => {
    const role = window.localStorage.getItem("role");
    if (role == "admin") {
      const id = e.target.id;
      Modal.confirm({
        title: "Cảnh báo",
        content: "Bạn có chắc chắn muốn xóa sản phẩm này không?",
        cancelText: "Cancel",
        // onOk: handleClickDeleteProduct1(id),
        onOk: () => {
          handleClickDeleteProduct1(id);
        },
      });
    } else message.error("Bạn không được phép xóa sản phẩm");
  };
  const handleClickDeleteProduct1 = async (id) => {
    const res = await deleteProduct(id);
    dispatch(fetchProduct());
    if (res.status === true) {
      notification["success"]({
        message: "Thành công",
        description: "Xóa sản phẩm thành công",
      });
    }
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
    if (user.role == "admin") navigate("/admin/product/add-product");
    message.error("Bạn không được phép thêm sản phẩm");
  };
  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="ml-10">{text}</p>,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (url) =>
        url && <Image preview={false} src={url} className="w-10 h-10" />,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Loại sản phẩm",
      dataIndex: "type",
      key: "type",
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
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                id={record.id}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
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
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                id={record.id}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(fetchProduct());
    console.log(products);
  }, []);
  useEffect(() => {
    // console.log(users);
    let listProduct = [];
    products?.map((item, index) => {
      let loaiProduct = "Profile";
      if (item.MaPL === 1) loaiProduct = "Đồ uống";
      else if (item.MaPL === 2) loaiProduct = "Đồ ăn";
      else if (item.MaPL === 3) loaiProduct = "Topping";
      const product = {
        key: index,
        id: item.id,
        name: item.TenSP,
        image: item.HinhAnh,
        price: item.Gia.toLocaleString(),
        type: loaiProduct,
      };
      listProduct.push(product);
    });
    setData(listProduct);
  }, [products]);
  const onSearch = (e) => {
    dispatch(onFilterProduct(e.target.value));
  };
  return (
    <>
      <div className="w-full my-5 flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm sản phẩm"
          onChange={(e) => onSearch(e)}
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
          <p className="mb-0 h-full">Thêm sản phẩm</p>
        </Button>
      </div>
      <div className="px-4 pt-4 pb-14 bg-[#F0F2F5]">
        <p className="text-[1.3rem] font-bold mb-1">Sản phẩm</p>
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

export default Products_admin;
