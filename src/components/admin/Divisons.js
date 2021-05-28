import React from "react";
import {
  Layout,
  Breadcrumb,
  Table,
  Tag,
  Space,
  Select,
  Button,
  Avatar,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined,
  HomeOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import divisions from "../../assets/data/divisions";

const { Header, Content } = Layout;
const { Option } = Select;

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    with: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: 250,
  },
  {
    title: "Telephone",
    key: "tel",
    dataIndex: "tel",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 350,
  },
  {
    title: "District",
    dataIndex: "district",
    key: "district",
    width: 150,
  },
  {
    title: "Province",
    key: "province",
    dataIndex: "province",
    width: 100,
  },
];

class Divisions extends React.Component {
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
        <CustomSidebar collapsed={this.state.collapsed} selected={"3"} />
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
            <Breadcrumb.Item>Branches</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "80vh",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <Select
                style={{ width: 200, marginRight: "20px" }}
                allowClear
                placeholder="Select Province"
              >
                <Option value="1">Southern</Option>
                <Option value="2">Western</Option>
                <Option value="3">North Central</Option>
              </Select>
              <Select
                style={{ width: 200 }}
                allowClear
                placeholder="Select District"
              >
                <Option value="1">Matara</Option>
                <Option value="2">Galle</Option>
                <Option value="3">Hambantota</Option>
              </Select>
              {/* <Button
                type="primary"
                style={{ float: "right" }}
                onClick={() => {}}
              >
                Add Division
              </Button> */}
            </div>
            <Table
              columns={columns}
              dataSource={divisions}
              scroll={{ x: 1100 }}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Divisions;
