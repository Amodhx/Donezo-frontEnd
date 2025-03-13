import { Content } from "antd/es/layout/layout";
import { Col, Row, theme } from "antd";
import { EditOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

function Notes() {
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Content>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        borderRadius: borderRadiusLG,
                        margin: '10px'
                    }}
                >
                    <Row gutter={[16, 16]}>
                            <Col key={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card
                                    style={{ width: '100%' }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${  1}`} />}
                                        title={`Card ${1}`}
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>

                    </Row>
                </div>
            </Content>
        </>
    );
}

export default Notes;
