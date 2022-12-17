import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Radio, Tabs, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Profile from "./Profile";
import ChangePassWord from "./ChangePassWord";
import Orders from "./Orders";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const defaultActiveKey = location.state?.default;
  const arrayProfile = [<Profile />, <ChangePassWord />, <Orders />];
  return (
    <div className="pt-10 h-full pb-10 container mx-auto max-w-[1124px]">
      <Breadcrumb className="pt-20 mb-5 ml-5">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Thông tin tài khoản</Breadcrumb.Item>
      </Breadcrumb>
      <Title className="ml-5 border-b-2 border-solid pb-5" level={2}>
        PROFILE
      </Title>
      <Tabs
        className="text-left h-full"
        centered={false}
        defaultActiveKey={defaultActiveKey || 0}
        tabPosition="left"
        style={{
          height: 220,
        }}
        items={arrayProfile.map((item, i) => {
          let label = "Profile";
          const id = i;
          if (id === 0) label = "Profile";
          else if (id === 1) label = "Password";
          else if (id === 2) label = "Orders";

          return {
            label: label,
            key: id,
            disabled: i === 28,
            children: item,
          };
        })}
      />
    </div>
  );
};

export default Sidebar;
