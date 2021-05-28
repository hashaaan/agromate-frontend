import React from "react";
import { Layout, Breadcrumb, Avatar } from "antd";
import axios from "axios";
import {
  HomeOutlined,
  UserOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import production from "../../assets/data/production";

const { Content } = Layout;

class UProfile extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
    authUser: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("/api/v1/auth/user", { headers: { token: token } })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          const authUser = res.data;
          this.setState({ authUser });
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error(err.response.data);
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
    const { collapsed, authUser } = this.state;
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
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "80vh",
              //background: "green",
            }}
          >
            <div style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }}>
              <h4 className="text-center">Profile Details</h4>
              <div className="card profile">
                <div className="row">
                  <div className="col-sm-6 picture">
                    <center>
                      <Avatar
                        icon={<UserOutlined />}
                        title={"Hashan"}
                        size={150}
                        shape="square"
                      />
                    </center>
                  </div>
                  <div className="col-sm-6 details">
                    <center>
                      <p className="name">
                        <b>{authUser && authUser.name}</b>{" "}
                        <CheckCircleFilled
                          style={{ color: "#05728f" }}
                          title="Verified"
                        />
                      </p>
                    </center>
                    <center>
                      <p>Domestic Farmer</p>
                    </center>
                    <center>
                      <p>Email: {authUser && authUser.email}</p>
                    </center>
                  </div>
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <b>Age</b>
                        </p>
                        <p>29</p>
                      </td>
                      <td>
                        <p>
                          <b>Experience</b>
                        </p>
                        <p>10</p>
                      </td>
                      <td>
                        <p>
                          <b>Crops</b>
                        </p>
                        <p>30</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <center>
                  <a className="waves-effect waves-light btn edit">
                    Edit Profile
                  </a>
                </center>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UProfile;
