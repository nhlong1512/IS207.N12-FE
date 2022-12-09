import React from "react";
import {
  Button,
  Layout,
  Space,
  Table,
  Tag,
  Spin,
  message,
  Popconfirm,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import AppMenu from "../../components/admin/AppMenu";
import { deleteStaff, getAlUser } from "../../api/admin/Users";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProfile } from "../../reducer/admin/user/userAction";
import Search from "antd/lib/input/Search";
import { useNavigate } from "react-router-dom";
import { getDetailUser } from "../../reducer/admin/user/userSlice";
import { getAllOrders } from "../../reducer/admin/order/orderActions";
const Orders_admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order_admin);
  const [data, setData] = useState([]);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const handleClickAddStaff = () => {
    navigate("/admin/staff/add-staff");
  };
  const handleClickDetailPerson = (e) => {
    // const id = e.target.id;
    // const detailUser = orders?.find(
    //   (user) => parseInt(user.id) === parseInt(id)
    // );
    // console.log(detailUser);
    // dispatch(getDetailUser(detailUser));
    // navigate("/admin/staff/detail-staff", {
    //   state: { detailStaff: detailUser },
    // });
  };
  const handleClickDeleteStaff = async (e) => {
    // const id = e.target.id;
    // await deleteStaff(id);
    // dispatch(getAllUserProfile());
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const columns = [
    {
      title: "Mã Đơn hàng",
      dataIndex: "MaHD",
      key: "MaHD",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "HoTen",
      key: "HoTen",
    },
    {
      title: "Số điện thoại",
      dataIndex: "SDT",
      key: "SDT",
    },
    {
      title: "Trạng thái",
      key: "TrangThai",
      dataIndex: "TrangThai",
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "PTTT",
      dataIndex: "PTTT",
      key: "PTTT",
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChi",
      key: "DiaChi",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickDetailPerson(e)}
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
            onClick={(e) => handleClickDeleteStaff(e)}
          >
            <svg
              id={record.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                id={record.id}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>

          <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getAllOrders());
    console.log(orders);
  }, []);
  useEffect(() => {
    // console.log(users);
    let listOrders = [];
    orders?.map((item, index) => {
      const order = {
        key: index,
        MaHD: item.id,
        HoTen: item.HoTen,
        SDT: item.SDT,
        TrangThai: item.TrangThai,
        PTTT: item.PTTT,
        DiaChi: item.DiaChiNH,
      };
      listOrders.push(order);
    });
    setData(listOrders);
  }, [orders]);
  return (
    <>
      <div className="w-full my-5 flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm nhân viên"
          //   onChange={(e) => onSearch(e)}
          style={{
            marginLeft: "20px",
            width: 300,
          }}
        />
        <Button
          onClick={handleClickAddStaff}
          className="w-[12rem] flex items-center justify-center accent-[#146d4d] hover:text-[#146d4d] hover:border-[#146d4d]  ml-[20px] "
        >
          <UserAddOutlined className="h-full pr-1" />
          <p className="mb-0 h-full">Thêm nhân viên</p>
        </Button>
      </div>
      <div className="px-4 pt-4 pb-14 bg-[#F0F2F5]">
        <p className="text-[1.3rem] font-bold mb-1">Nhân viên</p>
        <Table
          pagination={false}
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

export default Orders_admin;
