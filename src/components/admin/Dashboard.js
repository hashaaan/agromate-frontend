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
import { Line } from "@ant-design/charts";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import production from "../../assets/data/production";

const { Content } = Layout;

const config = {
  data: production,
  xField: "year",
  yField: "value",
  seriesField: "category",
  // point: {
  //   size: 5,
  //   shape: "circle",
  // },
  color: ["#D62A0D", "#2ecc71", "#FAA219"],
};

class Dashboard extends React.Component {
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
        <CustomSidebar collapsed={collapsed} selected={"1"} />
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
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }}>
              <Row gutter={24}>
                <Col span={6}>
                  <Card style={{ background: "#f1c40f" }}>
                    <Statistic
                      title="Active Farmers"
                      value={this.state.userCount}
                      prefix={<TeamOutlined />}
                      valueStyle={{ color: "#000" }}
                      style={{ color: "#000" }}
                      className="dark"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ background: "#2980b9" }}>
                    <Statistic
                      title="Active Instructors"
                      value={93}
                      prefix={<UserSwitchOutlined />}
                      valueStyle={{ color: "#fff" }}
                      style={{ color: "#fff" }}
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ background: "#27ae60" }}>
                    <Statistic
                      title="Grains Production"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: "#fff" }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                      style={{ color: "#fff" }}
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ background: "#c0392b" }}>
                    <Statistic
                      title="Vegetables Production"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: "#fff" }}
                      prefix={<ArrowDownOutlined />}
                      suffix="%"
                      style={{ color: "#fff" }}
                    />
                  </Card>
                </Col>
              </Row>
              <h5 style={{ marginBottom: "24px", marginTop: "24px" }}>
                Total Harverst Per Year (KG)
              </h5>
              <Line {...config} />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
