import {CheckSquare, FileText, Plus} from "lucide-react";
import {Layout, theme, Modal, Button, Input} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";
import {DatePicker, TimePicker} from "antd/lib";

const {Header} = Layout


function HeaderComponent() {
    const [active, setActive] = useState("tasks");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
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
                    active === "notes" && (
                        <>
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type="primary" onClick={handleOk}>Save</Button>
                        </>
                    )
                }
            >
                {active === "tasks" ? (
                    <div>
                        <Input placeholder="Task" style={{ marginBottom: 10 }} />
                        <DatePicker style={{ width: '100%', marginBottom: 10 }} />
                        <TimePicker style={{ width: '100%' }} format="HH:mm" />
                    </div>
                ) : (
                    <div>
                        <Input placeholder="Title" style={{ marginBottom: 10 }} />
                        <Input.TextArea placeholder="Description" rows={4} />
                    </div>
                )}
            </Modal>
        </>
    )
}

export default HeaderComponent