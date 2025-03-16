import { Content } from "antd/es/layout/layout";
import { Col, Row, theme } from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import NoteModel from "../model/NoteModel.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store.ts";
import {toast} from "react-hot-toast";
import {deleteNote} from "../reducers/NoteSlices.ts";

const { Meta } = Card;

function Notes() {

    const notes:NoteModel[] = useSelector((state:RootState) => state.notes)
    const dispatch = useDispatch<AppDispatch>();
    const {
        token: {borderRadiusLG},
    } = theme.useToken();

    async function handleView(note:NoteModel){
        console.log(note)
    }
    async function handleEdit(note:NoteModel){
        console.log(note)
    }
    async function handleDelete(note:NoteModel){
        toast(
            (t) => (
                <div>
                    <p>Are you sure you want to delete this note?</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <button
                            style={{ backgroundColor: '#f5222d', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            onClick={() => {
                                dispatch(deleteNote(note))
                                toast.dismiss(t.id);
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            style={{ backgroundColor: '#1890ff', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            onClick={() => toast.dismiss(t.id)} // Dismiss without action
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ),
            {
                duration: 6000, // Toast stays visible until dismissed
            }
        );
    }

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
                                        <EyeOutlined key="view" onClick={() => handleView(note)} />,
                                        <EditOutlined key="edit" onClick={() => handleEdit(note)} />,
                                        <DeleteOutlined key="delete" onClick={() => handleDelete(note)} style={{ color: 'red' }} />,
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
