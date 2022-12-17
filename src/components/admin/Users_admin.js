import React from "react";
import { Button, Layout, Space, Table, Tag, Spin } from "antd";
import { LoadingOutlined, UserAddOutlined } from "@ant-design/icons";
import AppMenu from "../../components/admin/AppMenu";
import { getAlUser } from "../../api/admin/Users";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProfile } from "../../reducer/admin/user/userAction";
import Search from "antd/lib/input/Search";
import { onFilterStaff } from "../../reducer/admin/user/userSlice";
import { useNavigate } from "react-router-dom";
const Users_admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user_admin);
  const [data, setData] = useState([]);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthDay",
      key: "birthDay",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Địa chỉ",
      key: "Adress",
      dataIndex: "Adress",
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
  ];
  useEffect(() => {
    dispatch(getAllUserProfile());
    console.log(users);
  }, []);
  useEffect(() => {
    // console.log(users);
    let listUsers = [];
    users?.map((item, index) => {
      if (item?.role === "khachhang") {
        const user = {
          key: index,
          email: item.email,
          name: item.hoten,
          birthDay: item.ngsinh,
          phone: item.sdt,
          Adress: item.diachi,
        };
        listUsers.push(user);
      }
    });
    setData(listUsers);
  }, [users]);

  const onSearch = (e) => {
    dispatch(onFilterStaff(e.target.value));
  };
  const handleClickAddUser = () => {
    navigate("add-user");
  };
  return (
    <>
      <div className="w-full my-5 flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm người dùng"
          onChange={(e) => onSearch(e)}
          style={{
            marginLeft: "20px",
            width: 300,
          }}
        />
        <Button
          onClick={handleClickAddUser}
          className="w-[12rem] flex items-center justify-center accent-[#146d4d] hover:text-[#146d4d] hover:border-[#146d4d]  ml-[20px] "
        >
          <UserAddOutlined className="h-full pr-1" />
          <p className="mb-0 h-full">Thêm người dùng</p>
        </Button>
      </div>
      <div className="px-4 pt-4 pb-14 bg-[#F0F2F5]">
        <p className="text-[1.3rem] font-bold mb-1">Người dùng</p>
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

export default Users_admin;
