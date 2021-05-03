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
    history.push("/");
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: onToggle,
      })}
      Admin Dashboard
      <LogoutOutlined
        className="trigger right"
        onClick={() => handleLogout()}
      />
      <div className="trigger right" style={{ lineHeight: "58px" }}>
        <Avatar icon={<UserOutlined />} />
      </div>
      <BellOutlined className="trigger right" />
    </Header>
  );
};

export default withRouter(CustomHeader);
