import logo from '../assets/secondLogo.png'
import {
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useState} from "react";

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

const items: MenuItem[] = [
    getItem('My Activities', '1', <PieChartOutlined />),
    getItem('Projects', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
function MainPage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <div className="flex justify-center items-center h-24">
                        <img src={logo} alt="logo" className="h-15"/>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Hello User</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}
export default MainPage;