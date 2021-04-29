import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  IdcardOutlined,
  MessageOutlined,
  PrinterOutlined,
  SnippetsOutlined,
  TeamOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const CustomSidebar = ({ collapsed, selected }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{collapsed ? "AG" : "AGROMATE - SL"}</div>
      <Menu theme="dark" mode="inline" selectedKeys={selected}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/farmers">Farmers</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<IdcardOutlined />}>
          <Link to="/divisions">Divisions</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AreaChartOutlined />}>
          <Link to="/production">Production</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SnippetsOutlined />}>
          <Link to="/requests">Requests</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<MessageOutlined />}>
          <Link to="/messages">Messages</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<PrinterOutlined />}>
          <Link to="/reports">Reports</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default CustomSidebar;
