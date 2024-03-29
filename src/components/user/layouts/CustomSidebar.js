import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  //IdcardOutlined,
  MessageOutlined,
  SecurityScanOutlined,
  //PrinterOutlined,
  SnippetsOutlined,
  TeamOutlined,
  //AreaChartOutlined,
  UserOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const CustomSidebar = ({ collapsed, selected }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} id="user-sider">
      <div className="logo">{collapsed ? "AG" : "AGROMATE"}</div>
      <Menu theme="dark" mode="inline" selectedKeys={selected}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/user/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/user/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          <Link to="/user/messages">Messages</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SnippetsOutlined />}>
          <Link to="/user/requests">Requests</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<FileDoneOutlined />}>
          <Link to="/user/survey">Surveys</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<SecurityScanOutlined />}>
          <Link to="/user/recommendations">Recommendations</Link>
        </Menu.Item>
        {/* <Menu.Item key="7" icon={<TeamOutlined />}>
          <Link to="/user/officers">Officers</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="7" icon={<IdcardOutlined />}>
          <Link to="/user/divisions">Divisions</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="8" icon={<AreaChartOutlined />}>
          <Link to="/user/production">Production</Link>
        </Menu.Item> */}
        {/* <Menu.Item key="9" icon={<PrinterOutlined />}>
          <Link to="/user/reports">Reports</Link>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default CustomSidebar;
