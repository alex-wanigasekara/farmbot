import "antd/dist/reset.css";
import "./App.css";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Home from "./components/Home";
import Accounts from "./components/gl/Accounts";
import Account from "./components/gl/Account";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Cashier", "1", <PieChartOutlined />, [
    getItem(<Link to="/">Payment</Link>, "13"),
    getItem("Collection", "14"),
  ]),
  getItem("General Ledger", "2", <DesktopOutlined />, [
    getItem(<Link to="/accounts">Accounts</Link>, "15"),
    // getItem(<Link to="/">Home</Link>, "16"),
  ]),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Account", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          {/* <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* <Router> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/accounts/:id" element={<Account />} />
            </Routes>
            {/* </Router> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Farmbot ©2023 Created by Zealot
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
