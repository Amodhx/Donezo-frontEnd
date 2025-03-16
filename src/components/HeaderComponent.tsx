import {CheckSquare, FileText, Plus} from "lucide-react";
import {Layout, theme, Modal, Button, Input, Upload} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";
import {DatePicker, TimePicker} from "antd/lib";
import { UploadOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/Store.ts";
import TaskModel from "../model/TaskModel.ts";
import {addTask} from "../reducers/TaskSlices.ts";
import {toast, Toaster} from "react-hot-toast";
import {addNote} from "../reducers/NoteSlices.ts";
import NoteModel from "../model/NoteModel.ts";

const {Header} = Layout


function HeaderComponent() {
    const [fileList, setFileList] = useState([]);
    const [active, setActive] = useState("tasks");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [task,setTask] = useState<string>('');
    const [date,setDate] = useState<string>('');
    const [time,setTime] = useState<string>('');
    const [noteTitle,setNoteTitle] = useState<string>('');
    const [noteDesc,setNoteDesc] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();


    const handleImageUpload = (file: File) => {
        setImageFile(file);
        return false;
    };
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const showModal = () => {
        setIsModalOpen(true);
    };
    function clearModalFields(){
        setTask('')
        setDate('')
        setTime('')
        setNoteTitle('')
        setNoteDesc('')
        setImageFile(null)
        handleClearFile();
    }
    const handleClearFile = () => {
        setFileList([]); // Clears the uploaded file
    };
    const handleOk = () => {
        if (active === "tasks") {
            dispatch(addTask(new TaskModel("1",task,"New Tasks",["New Tasks"],date,time)));
            setIsModalOpen(false);
            toast.success('Successfully Saved!')
            clearModalFields();
        }else {
            dispatch(addNote(new NoteModel('1',noteTitle,noteDesc,imageFile)))
            setIsModalOpen(false);
            toast.success('Successfully Saved!')
            clearModalFields();
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
     
    return (
        <>
            <div><Toaster/></div>
            <Header style={{padding: '0', background: colorBgContainer}}>
                <div className="mx-5 w-25 h-16 flex items-center py-5 space-x-3">
                    <Link to="tasks" onClick={() => setActive("tasks")}>
                        <div className={`p-3 rounded-2xl ${active === "tasks" ? "bg-white shadow-sm" : ""}`}>
                            <CheckSquare size={28} className={active === "tasks" ? "text-blue-500" : "text-gray-400"}/>
                        </div>
                    </Link>

                    {/* Notes Icon */}
                    <Link to="notes" onClick={() => setActive("notes")}>
                        <div className={`p-3 rounded-2xl ${active === "notes" ? "bg-white shadow-sm" : ""}`}>
                            <FileText size={28} className={active === "notes" ? "text-blue-500" : "text-gray-400"}/>
                        </div>
                    </Link>
                    {/*Plus icon*/}
                    <div className={`p-3 rounded-2xl flex items-center gap-2 cursor-pointer`} onClick={showModal}>
                        <Plus size={20} className={active === "Notes" ? "text-blue-500" : "text-gray-400"}/>
                    </div>

                </div>

            </Header>
            <Modal
                title={active === "tasks" ? "Task Details" : "Add Notes"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    <>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" onClick={handleOk}>Save</Button>
                    </>
                }
            >
                {active === "tasks" ? (
                    <div>
                        <Input value={task} placeholder="Task" style={{marginBottom: 10}} onChange={(e) => {
                            setTask(e.target.value)
                        }}/>
                        <DatePicker style={{width: '100%', marginBottom: 10}}
                                    onChange={(_date, dateString) => setDate(dateString as string)}/>
                        <TimePicker style={{width: '100%'}} format="HH:mm"
                                    onChange={(_time, timeString) => setTime(timeString as string)}/>
                    </div>
                ) : (
                    <div>
                        <Input value={noteTitle} placeholder="Title" style={{marginBottom: 10}} onChange={(e) => {
                            setNoteTitle(e.target.value)
                        }}/>
                        <Input.TextArea value={noteDesc} placeholder="Description" rows={4} style={{marginBottom: 10}} onChange={(e) => {
                            setNoteDesc(e.target.value)
                        }}/>

                        {/* Image Upload Field */}
                        <Upload
                            fileList={fileList}
                            beforeUpload={handleImageUpload}
                            showUploadList={{showPreviewIcon: false}}
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined/>}>Upload Image</Button>
                        </Upload>

                        {/* Preview Uploaded Image */}
                        {imageFile && (
                            <div style={{marginTop: 10}}>
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Uploaded"
                                    style={{maxWidth: '100%', maxHeight: 200, borderRadius: 8}}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Modal>
        </>
    )
}

export default HeaderComponent