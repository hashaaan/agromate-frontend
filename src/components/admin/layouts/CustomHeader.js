import React from "react";
import { Layout, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

const CustomHeader = ({ collapsed, onToggle, ...props }) => {
  const handleLogout = () => {
    const { history } = props;
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_name");
    history.push("/");
  };

  const user_name = localStorage.getItem("user_name");

  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0 }}
      id="admin-header"
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: onToggle,
      })}
      Admin Dashboard
      <LogoutOutlined
        className="trigger right"
        onClick={() => handleLogout()}
      />
      <BellOutlined className="trigger right" />
      <div className="trigger right" style={{ lineHeight: "58px" }}>
        <Avatar icon={<UserOutlined />} title={user_name && user_name} />
      </div>
      {user_name && <span style={{ float: "right" }}>Hello! {user_name}</span>}
    </Header>
  );
};

export default withRouter(CustomHeader);
