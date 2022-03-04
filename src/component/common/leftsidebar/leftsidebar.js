import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./leftsidebar.css"

const { Sider} = Layout;

const LeftSideBar = (props) => {
  const renderMenuItem = (title, url, key) => {
    return (
      <Menu.Item key={key}>
        <NavLink to={url}>{title}</NavLink>
      </Menu.Item>
    );
  };

  return (
    <Sider trigger={null} collapsible>
      <div className="logo" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0cknHiKQoMIq0169d_Mqc49vvLVonZKOwQ&usqp=CAU"></img>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        {props.menuItems.map((item, index) =>
          renderMenuItem(item.title, item.url, index)
        )}
      </Menu>
    </Sider>
  );
};

export default LeftSideBar;
