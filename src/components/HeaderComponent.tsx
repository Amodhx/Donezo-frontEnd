import {CheckSquare, FileText, Plus} from "lucide-react";
import {Layout, theme,Modal } from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";

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
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default HeaderComponent