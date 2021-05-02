import React from "react";
import { Layout, Breadcrumb, Table, Tag, Space, Select, Button } from "antd";
import { HomeOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import farmers from "../../assets/data/farmers";

const { Content } = Layout;
const { Option } = Select;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: 200,
  },
  {
    title: "Farmer ID",
    dataIndex: "id",
    key: "id",
    with: 100,
  },
  {
    title: "DOB",
    key: "dob",
    dataIndex: "dob",
    width: 150,
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    width: 100,
  },
  {
    title: "Farming Crop(s)",
    dataIndex: "crops",
    key: "crops",
    width: 250,
    render: (crops) => (
      <>
        {crops.map((crop, i) => {
          return (
            <Tag color={"green"} key={i}>
              {crop}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Experience",
    dataIndex: "experince",
    key: "experince",
    width: 150,
    render: (exp) => <span>{exp} years</span>,
  },
  {
    title: "ZIP Code",
    key: "zipcode",
    dataIndex: "zipcode",
    width: 100,
  },
  {
    title: "Division",
    key: "division",
    dataIndex: "division",
    width: 200,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 100,
    render: (id) => (
      <Space size="middle" key={id}>
        <EyeOutlined style={{ color: "blue" }} title="View" />
        <MessageOutlined style={{ color: "green" }} title="Message" />
      </Space>
    ),
  },
];

class Farmers extends React.Component {
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
    const { collapsed } = this.state;
    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"2"} />
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
            <Breadcrumb.Item>Farmers</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <Select
                style={{ width: 200, marginRight: "20px" }}
                allowClear={true}
                placeholder="Select Division"
              >
                <Option value="1">Urugamuwa - South</Option>
                <Option value="2">Dandeniya - North</Option>
              </Select>
              <Select
                mode={"multiple"}
                style={{ width: 200 }}
                allowClear={true}
                placeholder="Select Crop(s)"
              >
                <Option value="1">Rice</Option>
                <Option value="2">Corn</Option>
                <Option value="3">Cinnomon</Option>
              </Select>
              <Button
                type="primary"
                style={{ float: "right" }}
                onClick={this.showAddModal}
              >
                Clear Filters
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={farmers}
              scroll={{ x: 1350 }}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Farmers;
