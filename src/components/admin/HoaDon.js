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
import { Link, useNavigate } from "react-router-dom";
import { getDetailProduct } from "../../reducer/admin/product/productSlice";
import { deleteProduct } from "../../api/admin/Product";
import { getHoaDonAction } from "../../reducer/admin/hoadon/hoadonAction";
import { onFilterHoaDon } from "../../reducer/admin/hoadon/hoadonSlice";
import { getKhuyenMaiAction } from "../../reducer/admin/khuyenmai/khuyenmaiAction";
const HoaDon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hoadon, isLoading } = useSelector((state) => state.hoadon_admin);
  const [data, setData] = useState([]);
  const handleClickDetailHoaDon = (e) => {
    const id = e.target.id;
    // const detailProduct = products.find(
    //   (item) => parseInt(item.id) === parseInt(id)
    // );
    // dispatch(getDetailProduct(detailProduct));
    navigate("/admin/hoadon/hoadon-detail", {
      state: { MaHD: id },
    });
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
    navigate("/admin/product/add-product");
  };
  const columns = [
    {
      title: "Mã hóa đơn",
      dataIndex: "id",
      key: "id",
      render: (text) => <p className="ml-10">{text}</p>,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "hoten",
      key: "hoten",
    },
    {
      title: "Tổng tiền",
      dataIndex: "TongTien",
      key: "TongTien",
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "NgayHD",
      key: "NgayHD",
    },
    {
      title: "Online/Offline",
      dataIndex: "isOnline",
      key: "isOnline",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickDetailHoaDon(e)}
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
          {/* <div
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
          </div> */}
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getHoaDonAction());
    dispatch(getKhuyenMaiAction());
    // console.log(products);
  }, []);
  useEffect(() => {
    // console.log(users);
    let listProduct = [];
    hoadon?.map((item, index) => {
      let Hinhthuc = "";
      if (item.isOnline === 1) Hinhthuc = "Online";
      else Hinhthuc = "Offline";
      const product = {
        key: index,
        id: item.id,
        MaKH: item.MaKH,
        NgayHD: item.NgayHD,
        TongTien: item.TongTien.toLocaleString(),
        isOnline: Hinhthuc,
        hoten: item.hoten,
      };
      listProduct.push(product);
    });
    setData(listProduct);
  }, [hoadon]);

  const onSearch = (e) => {
    dispatch(onFilterHoaDon(e.target.value));
  };
  return (
    <>
      <div className="w-full my-5 flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm hóa đơn"
          onChange={(e) => onSearch(e)}
          style={{
            marginLeft: "20px",
            width: 300,
          }}
        />
        <Link to="/sanpham">
          <Button className="w-[12rem] flex items-center justify-center accent-[#146d4d] hover:text-[#146d4d] hover:border-[#146d4d]  ml-[20px] ">
            <UserAddOutlined className="h-full pr-1" />
            <p className="mb-0 h-full">Thêm hóa đơn</p>
          </Button>
        </Link>
      </div>
      <div className="px-4 pt-4 pb-14 bg-[#F0F2F5]">
        <p className="text-[1.3rem] font-bold mb-1">Hóa đơn</p>
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

export default HoaDon;
