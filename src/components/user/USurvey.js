import React from "react";
import { Layout, Breadcrumb, Rate, List, Avatar, Button } from "antd";
import axios from "axios";
import { HomeOutlined, TagOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";

const { Content } = Layout;

class USurvey extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
    loadingSubmit: false,
    ratings: [],
    submitted: false,
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

  handleRate = (rating, id) => {
    //console.log(r, id);
    const { ratings } = this.state;
    let rateObj = { id, rating };
    let arr = [rateObj, ...ratings];
    let filtered = arr.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    this.setState({ ratings: filtered });
  };

  handleSubmit = () => {
    this.setState({ loadingSubmit: true });
    setTimeout(
      () => this.setState({ loadingSubmit: false, submitted: true }),
      1000
    );
  };

  render() {
    const { collapsed, ratings, loadingSubmit, submitted } = this.state;

    console.log(ratings);

    const crops = [
      { id: 100, name: "Brinjal", type: "Vegetable" },
      { id: 101, name: "Okra", type: "Vegetable" },
      { id: 130, name: "Lemon", type: "Fruit" },
      { id: 102, name: "Beet root", type: "Vegetable" },
      { id: 103, name: "Green cabbage", type: "Vegetale" },
    ];

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
              <div className="card survey">
                {!submitted ? (
                  <div>
                    <h5 className="mb-3">
                      01. Please provide your ratings for the crops below
                    </h5>
                    <List
                      size="large"
                      dataSource={crops}
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
                            description={crop.type}
                          />
                          <div>
                            <Rate
                              onChange={(r) => this.handleRate(r, crop.id)}
                              allowClear={false}
                            />
                          </div>
                        </List.Item>
                      )}
                    />
                    <div className="submit-button">
                      <Button
                        block
                        type="primary"
                        disabled={ratings.length < 5 || loadingSubmit}
                        onClick={() => this.handleSubmit()}
                        loading={loadingSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                ) : (
                  <h5 style={{ textAlign: "center" }} className="mt-3 mb-3">
                    Thank you for your time!
                  </h5>
                )}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default USurvey;
