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
      <div className="logo">{collapsed ? "AG" : "AGROMATE"}</div>
      <Menu theme="dark" mode="inline" selectedKeys={selected}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/admin/farmers">Farmers</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<MessageOutlined />}>
          <Link to="/admin/messages">Messages</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<IdcardOutlined />}>
          <Link to="/admin/branches">Branches</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SnippetsOutlined />}>
          <Link to="/admin/requests">Requests</Link>
        </Menu.Item>
        {/* <Menu.Item key="4" icon={<AreaChartOutlined />}>
          <Link to="/admin/production">Production</Link>
        </Menu.Item> */}
        <Menu.Item key="7" icon={<PrinterOutlined />}>
          <Link to="/admin/reports">Reports</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default CustomSidebar;
