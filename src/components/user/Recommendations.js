import React from "react";
import { Layout, Breadcrumb, Rate, List, Avatar, Button } from "antd";
//import axios from "axios";
import {
  CheckCircleOutlined,
  HomeOutlined,
  TagOutlined,
} from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import crop_data from "../../assets/data/crop_data.json";

const { Content } = Layout;

class Recommendations extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
  };

  componentDidMount() {
    //
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

  render() {
    const { collapsed } = this.state;

    console.log(crop_data);

    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"6"} />
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
            <Breadcrumb.Item>Recommendations</Breadcrumb.Item>
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
              <h4 className="text-center">Recommendations for you</h4>
              <div className="card survey">
                <div>
                  <h5 className="mb-3">
                    Followings are the recommended crops for plantation
                  </h5>
                  <List
                    size="large"
                    dataSource={crop_data}
                    renderItem={(crop) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              icon={<TagOutlined />}
                              style={{ background: "#27ae60" }}
                            />
                          }
                          title={crop.name}
                          description={crop.crop_category}
                        />
                        <div>
                          <CheckCircleOutlined style={{ color: "#05728f" }} />
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Recommendations;
