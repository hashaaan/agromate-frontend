import React from "react";
import {
  Layout,
  Breadcrumb,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox,
  notification,
} from "antd";
//import axios from "axios";
import moment from "moment";
import { HomeOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";

const { Content } = Layout;
const { Option } = Select;

class URequests extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
    loading: false,
  };

  componentDidMount() {
    this.formRef.current.setFieldsValue({
      requester: localStorage.getItem("user_name"),
      date: moment(),
    });
  }

  formRef = React.createRef();

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

  handleSubmit = (data) => {
    console.log(data);
    if (data) {
      this.setState({ loading: true });
      setTimeout(() => this.onSuccess(), 1500);
    }
  };

  onSuccess = () => {
    this.setState({ loading: false });
    notification["success"]({
      message: "Request Successful!",
      description: "Your crop request send successfully!",
    });
    this.formRef.current.resetFields();
  };

  render() {
    const { collapsed, loading } = this.state;
    const tailLayout = {
      wrapperCol: {
        span: 14,
        offset: 8,
      },
    };

    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"4"} />
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
              <h4 className="text-center">Farmer Requests</h4>
              <div className="card survey">
                <div>
                  <h5 className="mb-5 text-center">Crop Request Form</h5>
                  <Form
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 14,
                    }}
                    ref={this.formRef}
                    onFinish={this.handleSubmit}
                  >
                    <Form.Item
                      label="Requester Name"
                      name="requester"
                      rules={[
                        { required: true, message: "Requester is required!" },
                      ]}
                    >
                      <Input disabled />
                    </Form.Item>
                    <Form.Item
                      label="Owned Land Area"
                      name="landarea"
                      rules={[
                        { required: true, message: "Land area is required!" },
                      ]}
                    >
                      <Input placeholder="Land area in (sq ft)" />
                    </Form.Item>
                    <Form.Item
                      name="date"
                      label="Date of Request"
                      rules={[{ required: true, message: "Date is required!" }]}
                    >
                      <DatePicker />
                    </Form.Item>
                    <Form.Item
                      label="Crop Category"
                      name="category"
                      rules={[
                        { required: true, message: "Category is required!" },
                      ]}
                    >
                      <Select placeholder="Select Category">
                        <Option value="1">Vegetable</Option>
                        <Option value="2">Fruit</Option>
                        <Option value="3">Spice</Option>
                        <Option value="4">Grain</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Crop Name"
                      name="cropname"
                      rules={[
                        { required: true, message: "Crop name is required!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Quantity"
                      name="quantity"
                      rules={[
                        { required: true, message: "Quantity is required!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...tailLayout}
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          required: true,
                          message: "Your certification is required!",
                        },
                      ]}
                    >
                      <Checkbox>
                        <div className="mini-text">
                          I hereby certify above information is true.
                        </div>
                      </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        disabled={loading}
                      >
                        Submit Request
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default URequests;
