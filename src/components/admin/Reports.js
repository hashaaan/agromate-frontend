import React from "react";
import { Layout, Breadcrumb, Select } from "antd";
import { Column, RingProgress } from "@ant-design/charts";
//import axios from "axios";
import { HomeOutlined } from "@ant-design/icons";
import CustomSidebar from "./layouts/CustomSidebar";
import CustomHeader from "./layouts/CustomHeader";
import Pdf from "react-to-pdf";

const { Content } = Layout;
const { Option } = Select;

const rice = [
  {
    year: "2016",
    quantity: 4000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2015",
    quantity: 5000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2016",
    quantity: 4000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2017",
    quantity: 4000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2018",
    quantity: 2800,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2019",
    quantity: 6000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2020",
    quantity: 2000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2021",
    quantity: 2000,
    name: "Domestic Supply of Rice",
  },
  {
    year: "2016",
    quantity: 5000,
    name: "Total Supply of Rice",
  },
  {
    year: "2015",
    quantity: 6500,
    name: "Total Supply of Rice",
  },
  {
    year: "2016",
    quantity: 4000,
    name: "Total Supply of Rice",
  },
  {
    year: "2017",
    quantity: 4000,
    name: "Total Supply of Rice",
  },
  {
    year: "2018",
    quantity: 3000,
    name: "Total Supply of Rice",
  },
  {
    year: "2019",
    quantity: 7000,
    name: "Total Supply of Rice",
  },
  {
    year: "2020",
    quantity: 2000,
    name: "Total Supply of Rice",
  },
  {
    year: "2021",
    quantity: 3000,
    name: "Total Supply of Rice",
  },
  {
    year: "2016",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2015",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2016",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2017",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2018",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2019",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2020",
    quantity: 5000,
    name: "Total Household Demand",
  },
  {
    year: "2021",
    quantity: 5000,
    name: "Total Household Demand",
  },
];

const config = {
  data: rice,
  isGroup: true,
  xField: "year",
  yField: "quantity",
  seriesField: "name",
  color: ["#2ecc71", "#FAA219", "#3498db"],
};

const config2 = {
  height: 300,
  width: 300,
  //autoFit: false,
  percent: 0.6,
  color: ["#2ecc71", "#E8EDF3"],
  innerRadius: 0.85,
  radius: 0.98,
  statistic: {
    title: {
      style: {
        color: "#363636",
        fontSize: "15px",
        lineHeight: "18px",
      },
      formatter: function formatter() {
        return "GDP Growth";
      },
    },
  },
};

class Reports extends React.Component {
  state = {
    collapsed: false,
    isAddVisible: false,
    userCount: 0,
  };

  ref = React.createRef();

  componentDidMount() {}

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
    const tailLayout = {
      wrapperCol: {
        span: 14,
        offset: 8,
      },
    };

    const options = {
      orientation: "landscape",
      //unit: "in",
      //format: [4, 2],
    };

    return (
      <Layout id="custom-sider">
        <CustomSidebar collapsed={collapsed} selected={"7"} />
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
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "90vh",
            }}
          >
            <Pdf
              targetRef={this.ref}
              filename="agromate-report.pdf"
              options={options}
              //x={0.5}
              //y={0.5}
              //scale={0.9}
            >
              {({ toPdf }) => <button onClick={toPdf}>Generate Report</button>}
            </Pdf>
            <div
              ref={this.ref}
              style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }}
            >
              <h4 className="text-center mb-3">Generated Reports</h4>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h5 className="text-center">Rice: Supply and Demand</h5>
                    <Column {...config} />
                  </div>
                  <div className="col-sm-6">
                    <h5 className="text-center">Gross Domestic Product</h5>
                    <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                      <RingProgress {...config2} />
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

export default Reports;
