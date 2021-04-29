import React from "react";
import { Layout, Breadcrumb, Statistic, Row, Col, Card, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined,
  HomeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserSwitchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import CustomSidebar from "../layouts/CustomSidebar";
import production from "../../assets/data/production";

const { Header, Content } = Layout;

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
  };

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
    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={this.state.collapsed} selected={"1"} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <LogoutOutlined className="trigger right" />
            <div className="trigger right" style={{ lineHeight: "58px" }}>
              <Avatar icon={<UserOutlined />} />
            </div>
            <BellOutlined className="trigger right" />
          </Header>

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
                      value={1128}
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
