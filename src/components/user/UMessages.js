import React from "react";
import axios from "axios";
import moment from "moment";
import { Layout, Breadcrumb, Empty, Input, Button } from "antd";
import { HomeOutlined, SendOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
// import { Link } from "react-router-dom";

const { Content } = Layout;

class UMessages extends React.Component {
  state = {
    activeTab: null,
    activeAdmin: null,
    message: null,
    conversations: [],
    messages: [],
  };

  async componentDidMount() {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      axios
        .get(`/api/v1/conversations/user/${user_id}`)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            this.setState({ conversations: res.data });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  fetchMessages = async (c_id) => {
    axios
      .get(`/api/v1/messages/${c_id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          this.setState({ messages: res.data });
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          this.setState({ messages: [] });
        }
      });
  };

  onTabClick = (conv) => {
    this.setState({
      activeTab: conv.c_id,
      activeAdmin: conv.admin_id,
    });

    this.fetchMessages(conv.c_id);
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
    const { message, activeTab, activeAdmin } = this.state;
    const user_id = localStorage.getItem("user_id");
    const data = {
      message,
      user_id,
      admin_id: activeAdmin,
      sender: "user",
    };
    axios
      .post("/api/v1/conversations", data)
      .then((res) => {
        this.setState({ message: null });
        if (res.data) {
          console.log(res.data);
          this.fetchMessages(activeTab);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderMessage = (msg, i) => {
    const time = moment(msg.created_at).format("hh:mm A | MMMM D");
    if (msg.sender === "admin") {
      return (
        <div className="incoming_msg" key={i}>
          <div className="incoming_msg_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="hash"
            />
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
              <p>{msg.message}</p>
              <span className="time_date">{time}</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="outgoing_msg" key={i}>
        <div className="sent_msg">
          <p>{msg.message}</p>
          <span className="time_date">{time}</span>{" "}
        </div>
      </div>
    );
  };

  renderChatList = (conv, i) => {
    const { activeTab } = this.state;

    let active = false;
    const c_id = conv.c_id;
    const date = moment(conv.created_at).format("MMM D");
    if (c_id === activeTab) active = true;

    return (
      <div
        className={active ? "chat_list active_chat" : "chat_list"}
        key={i}
        onClick={() => this.onTabClick(conv)}
      >
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="hash"
            />
          </div>
          <div className="chat_ib">
            <h5>
              {conv.admin_name} <span className="chat_date">{date}</span>
            </h5>
            <p>ARPA</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      conversations,
      activeTab,
      collapsed,
      messages,
      message,
    } = this.state;

    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"8"} />
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
            <Breadcrumb.Item>Messages</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              minHeight: 280,
            }}
            id="umsg"
          >
            <div className="container">
              <h3 className=" text-center">Messaging</h3>
              <div className="messaging">
                <div className="inbox_msg">
                  <div className="inbox_people">
                    <div className="headind_srch">
                      <div className="recent_heading">
                        <h4>Recent</h4>
                      </div>
                      <div className="srch_bar">
                        <div className="stylish-input-group">
                          <input
                            type="text"
                            className="search-bar"
                            placeholder="Search"
                          />
                          <span className="input-group-addon">
                            <button type="button">
                              {" "}
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>{" "}
                            </button>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="inbox_chat">
                      {conversations.map((conv, i) =>
                        this.renderChatList(conv, i)
                      )}
                    </div>
                  </div>
                  <div className="mesgs">
                    <div className="msg_history">
                      {!activeTab && (
                        <Empty
                          description="Start messaging"
                          style={{ lineHeight: "400px" }}
                        />
                      )}
                      {activeTab &&
                        (messages.length > 0 ? (
                          messages.map((msg, i) => this.renderMessage(msg, i))
                        ) : (
                          <Empty
                            description="No messages available"
                            style={{ lineHeight: "400px" }}
                          />
                        ))}
                    </div>
                    <div className="type_msg">
                      <div className="input_msg_write">
                        <Input
                          className="write_msg"
                          placeholder="Type a message"
                          value={message}
                          onChange={this.onTypeMessage}
                        />
                        <Button
                          icon={<SendOutlined />}
                          shape="circle"
                          className="msg_send_btn"
                          type="primary"
                          loading={false}
                          onClick={this.onSend}
                          disabled={activeTab ? false : true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UMessages;
