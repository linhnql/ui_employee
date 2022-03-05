import { Route, Switch } from "react-router-dom";
import HomeList from '../component/home/HomeList'
import 'antd/dist/antd.css';
import './routes.css';
import { Layout, Breadcrumb } from 'antd';
import LeftSideBar from "../component/common/leftsidebar/leftsidebar";
import CustomerList from "../component/customer/CustomerList";

const { Content } = Layout;
 
const Routes = () => {

  const menuItems = [
    {title: "Quản lý nhà", url: "/home"},
    {title: "Quản lý khách hàng", url: "/customer"}
  ]

  return (
    <Switch>
      <Layout className="layout">
        <LeftSideBar menuItems={menuItems}/>
        <Content style={{ padding: "30px 50px" }}>
          <div className="site-layout-content">
            <Route path={"/"} exact component={HomeList} />
            <Route path="/home" component={HomeList} />
            <Route path={"/customer"} component={CustomerList} />
          </div>
        </Content>
      </Layout>
    </Switch>
  );
};

export default Routes;
