import React from "react";
import { Layout } from "antd";
import { Radio, Tabs, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
import Profile from "./Profile";
import ChangePassWord from "./ChangePassWord";
import Orders from "./Orders";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const defaultActiveKey = location.state?.default;
  const arrayProfile = [<Profile />, <ChangePassWord />, <Orders />];
  return (
    <div className="mt-10 h-[160vh] container mx-auto max-w-[1124px]">
      <Title className="ml-5 border-b-2 border-solid pb-5" level={2}>
        PROFILE
      </Title>
      <Tabs
        className="text-left h-[135vh]"
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
