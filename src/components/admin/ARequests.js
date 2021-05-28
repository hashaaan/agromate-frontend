import React from "react";
import { Layout, Breadcrumb, Table, Tag, Space, Select, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import requests from "../../assets/data/requests";

const { Content } = Layout;
const { Option } = Select;

const columns = [
  {
    title: "Requester Name",
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
    title: "Requested Date",
    key: "date",
    dataIndex: "date",
    width: 150,
  },
  {
    title: "Owned Land Area",
    dataIndex: "landarea",
    key: "landarea",
    width: 150,
    render: (land) => <span>{land} Sq ft</span>,
  },
  {
    title: "Crop Category",
    dataIndex: "crop_cat",
    key: "crop_cat",
    width: 200,
  },
  {
    title: "Crop Name",
    key: "crop_name",
    dataIndex: "crop_name",
    width: 200,
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
    width: 100,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 200,
    render: (id) => (
      <Space size="middle" key={id}>
        <Button type="primary" size="small" className="btn-approve">
          Approve
        </Button>
        <Button type="primary" size="small" className="btn-reject">
          Reject
        </Button>
      </Space>
    ),
  },
];

class ARequests extends React.Component {
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
            <Breadcrumb.Item>Requests</Breadcrumb.Item>
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
              {/* <Select
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
              </Select> */}
              {/* <Button
                type="primary"
                style={{ float: "right" }}
                onClick={this.showAddModal}
              >
                Add Farmer
              </Button> */}
              <h5>Crop Requests by Farmers</h5>
            </div>
            <Table
              columns={columns}
              dataSource={requests}
              scroll={{ x: 1300 }}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ARequests;
