import logo from '../assets/secondLogo.png'
import {
    PieChartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Layout, Menu } from 'antd';
import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

const {Sider } = Layout;

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
function MainPage() {
    const navigate = useNavigate()
    const items: MenuItem[] = [
        getItem('My Activities', '1', <PieChartOutlined />),
    ];
    const handleClick = (e: { key: string }) => {
        switch (e.key) {
            case '1':
                navigate('profile');
                break;
            default:
                navigate('/');
        }
    };
    const [collapsed, setCollapsed] = useState(false);;
    return (
        <>
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <div className="flex justify-center items-center h-24">
                        <img src={logo} alt="logo" className="h-15"/>
                    </div>
                    <Menu style={{marginTop : '15px'}} theme="dark" onClick={handleClick} defaultSelectedKeys={['1']} mode="inline" items={items}/>
                </Sider>
                <Layout>
                    <Outlet/>
                </Layout>
            </Layout>
        </>
    )
}
export default MainPage;