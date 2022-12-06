import React from "react";
import { Layout } from "antd";
import AppMenu from "../../components/admin/AppMenu";
const { Header, Footer, Sider, Content } = Layout;
const MainAdmin = () => {
  return (
    <Layout className="min-h-screen">
      <AppMenu />
      <Layout className="">
        <Header className="bg-white">Header</Header>
        <Content>Content</Content>
        <Footer className="bg-orange-500">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default MainAdmin;
