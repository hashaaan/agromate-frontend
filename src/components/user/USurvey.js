import React from "react";
import { Layout, Breadcrumb, Statistic, Row, Col, Card } from "antd";
import axios from "axios";
import {
  HomeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserSwitchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";

const { Content } = Layout;

class USurvey extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
    userCount: 0,
  };

  componentDidMount() {
    axios.get("/api/v1/users").then((res) => {
      console.log(res.data);
      if (res.data) {
        const userCount = res.data.length;
        this.setState({ userCount });
      }
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  showAddModal = () => {
    this.setState({ isAddVisible: true });
  };

  handleOk = () => {
    this.setState({ isAddVisible: false });
  };

  handleCancel = () => {
    this.setState({ isAddVisible: false });
  };

  onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"5"} />
        <Layout className="site-layout">
          <CustomHeader collapsed={collapsed} onToggle={this.toggle} />

          <Breadcrumb
            style={{
              marginTop: "24px",
              marginLeft: "auto",
              marginRight: "24px",
            }}
          >
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Survey</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "90vh",
            }}
          >
            <div style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }}>
              <h4 className="text-center">Farmer Weekly Survey</h4>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default USurvey;
