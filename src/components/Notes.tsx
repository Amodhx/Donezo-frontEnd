import { Content } from "antd/es/layout/layout";
import { Col, Row, theme } from "antd";
import { EditOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import NoteModel from "../model/NoteModel.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store.ts";
import {useEffect} from "react";
import {addNote} from "../reducers/NoteSlices.ts";

const { Meta } = Card;

function Notes() {

    const notes:NoteModel[] = useSelector((state:RootState) => state.notes)
    const dispatch = useDispatch<AppDispatch>();
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    useEffect(() => {
        dispatch(addNote(new NoteModel("1","First Note","This Is NOte Content Wuttoooo",null)));
    }, []);
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

                        {notes.map((note:NoteModel) => (
                            <Col key={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card
                                    style={{ width: '100%' }}
                                    cover={
                                        note.image ? (
                                            <img
                                                alt={note.note_title}
                                                src={URL.createObjectURL(note.image)}
                                            />
                                        ) : (
                                            <img
                                                alt="default"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        )
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg`} />}
                                        title={note.note_title}
                                        description={note.note_content}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
        </>
    );
}

export default Notes;
