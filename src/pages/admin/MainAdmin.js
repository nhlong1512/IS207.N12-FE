import React from "react";
import { Button, Layout, Space, Table, Tag } from "antd";
import AppMenu from "../../components/admin/AppMenu";
import { getAlUser } from "../../api/admin/Users";
import { useEffect } from "react";
import { useState } from "react";
import Users_admin from "../../components/admin/Users_admin";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header, Footer, Sider, Content } = Layout;
const MainAdmin = () => {

  const [data, setData] = useState([]);
  

  return (
    <Layout className="min-h-screen h-full bg-[#fff]">
      <AppMenu />
      <Layout className="bg-[#fff]">
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainAdmin;