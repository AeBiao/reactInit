import React, { useEffect ,useState } from 'react'
import { GET_COOKIE } from '../utils/Cookies'
import { Route, Redirect,useHistory } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  createFromIconfontCN
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import imga from "../imgs/1.png"
import { Breadcrumb, Button, Layout, Menu, theme, Divider } from 'antd';
import './Home.css'
import Form1 from '../component/Form1';
import Form2 from '../component/Form2';
import Form3 from '../component/Form3';
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[]  = [
  getItem('菜单', '1', <PieChartOutlined />) ,
  getItem('管理', '2', <DesktopOutlined />),  
  getItem('下拉列表', 'sub1', <UserOutlined />, [
    getItem('下拉1', '3'),
    getItem('下拉2', '4'),
    getItem('下拉3', '5'),
  ]),
  getItem('下拉列表', 'sub2', <TeamOutlined />, [getItem('下拉 1', '6'), getItem('下拉 2', '8')]),
  getItem('用户', '9', <FileOutlined />),
];


function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [numb, setNumb] = useState<number>(200.1);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

const history=useHistory()
  useEffect(() => {
    
    if (!GET_COOKIE("token")) {
    return history.push({pathname:"/login"})
    } else if(history.location.pathname=="/login" && GET_COOKIE("token")){
       return history.push({pathname:"/"})
  }
},[history.location.pathname])
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Header style={{color:"white"}}> 上海正也科技 </Header>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>一级</Breadcrumb.Item>
            <Breadcrumb.Item>二级</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
           {/* 内容 */}
              <Divider style={{ background: "#ccc" }}>
                <div className='hml'>
                  <img className='img' src={imga} /><div> 协议主体</div>
                </div>
              </Divider>
              <Form1></Form1>
              <Divider style={{ background: "#ccc",marginBottom:"0" }}>
                <div className='hml'>
                  <img className='img' src={imga} /><div> 协议主体</div>
                </div>
               
              </Divider>
               <div className='box'>
                <Button type="primary" style={{height:"40px"}}>添加产品</Button>
                <div className='ti'>
                  <span className='span'>购进总指标（万元）：￥{ numb} </span>
                  <span className='span'>购进总指标（万元）：￥{ numb} </span>
                  <span className='span'>购进总指标（万元）：￥{ numb} </span>
                </div>
                </div>
            </div>
            <Form2></Form2>
             <Divider style={{ background: "#ccc",marginBottom:"0" }}>
                <div className='hml'>
                  <img className='img' src={imga} /><div> 协议主体</div>
                </div>
            </Divider>
            <Form3></Form3>
        </Content>
        <Footer style={{ textAlign: 'left' }}><Button type="primary">保存</Button></Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default Home