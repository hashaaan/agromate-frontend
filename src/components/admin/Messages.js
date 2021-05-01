import React from "react";
import axios from "axios";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  List,
  Avatar,
  Empty,
  Input,
  Button,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BellOutlined,
  HomeOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomSidebar from "../layouts/CustomSidebar";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const data = [
  {
    title: "A. U. Sirisena",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Instructor, I have few questions to ask",
  },
  {
    title: "V. P. Vijayakumara",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Hello Instructor",
  },
  {
    title: "G. S. Priyankara",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Priyankara you should do followings",
  },
  {
    title: "A. L. Pathirana",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Instructor, I have few questions to ask",
  },
  {
    title: "G. P. Sudarshani",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Instructor, I have few questions to ask",
  },
  {
    title: "R.W. Premarathne",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Instructor are you available for call?",
  },
  {
    title: "W. S. Athula",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "What fertilizers should I use..",
  },
  {
    title: "W. A. Bandula",
    imgUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    lastMsg: "Hi! I have few requests",
  },
];

class Messages extends React.Component {
  state = {
    activeTab: null,
    message: null,
  };

  onTabClick = (key) => {
    this.setState({
      activeTab: key,
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onTypeMessage = (e) => {
    const message = e.target.value;
    this.setState({ message });
  };

  onSend = () => {
    const { message } = this.state;
    console.log(message);
    const data = {
      message,
      user_id: 1,
      admin_id: 4,
      sender: "admin",
    };
    axios
      .post("/api/v1/conversations", data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={this.state.collapsed} selected={"6"} />
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
            <Breadcrumb.Item>Messages</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
            id="messages"
          >
            <div style={{ margin: "20px 40px" }}>
              <Row gutter="24">
                <Col span="8">
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, i) => {
                      const index = i + 1;
                      const atab = this.state.activeTab;
                      return (
                        <List.Item
                          className={index === atab ? "active" : ""}
                          onClick={() => this.onTabClick(index)}
                        >
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                icon={<UserOutlined />}
                                size="large"
                                style={{ backgroundColor: "#87d068" }}
                              />
                            }
                            title={<Link to="/messages">{item.title}</Link>}
                            description={item.lastMsg}
                          />
                        </List.Item>
                      );
                    }}
                  />
                </Col>
                <Col span="16">
                  <div
                    style={{
                      height: "500px",
                      background: "#f0f2f5",
                      marginBottom: 10,
                    }}
                  >
                    {!this.state.activeTab && (
                      <Empty
                        description="Start messaging"
                        style={{ lineHeight: "500px" }}
                      />
                    )}
                    {this.state.activeTab && (
                      <>
                        <div className="message-wrap message-in">
                          <div className="message">
                            <div className="sender">A. U. Sirisena</div>
                            Instructor, I have few questions to ask
                          </div>
                        </div>
                        <div className="message-wrap message-out">
                          <div className="message">
                            Ok. Tell me what can I do for you ?
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <Row gutter="24">
                    <Col span={20} style={{ paddingRight: 0 }}>
                      <Input
                        placeholder="Type a message"
                        onChange={this.onTypeMessage}
                      />
                    </Col>
                    <Col span={4}>
                      <Button
                        icon={<SendOutlined />}
                        type="primary"
                        block
                        loading={false}
                        onClick={this.onSend}
                        disabled={this.state.activeTab ? false : true}
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Messages;
