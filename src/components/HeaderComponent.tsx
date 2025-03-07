import { CheckSquare, FileText } from "lucide-react";
import {Layout, theme} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";

const {Header} = Layout


function HeaderComponent(){
    const [active, setActive] = useState("tasks");
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <>
            <Header style={{padding: '0', background: colorBgContainer}}>
                <div className="mx-5 w-25 h-16 flex items-center py-5 space-x-3">
                    <Link to="tasks" onClick={() => setActive("tasks")}>
                        <div className={`p-3 rounded-2xl ${active === "tasks" ? "bg-white shadow-sm" : ""}`}>
                            <CheckSquare size={28} className={active === "tasks" ? "text-blue-500" : "text-gray-400"} />
                        </div>
                    </Link>

                    {/* Notes Icon */}
                    <Link to="notes" onClick={() => setActive("notes")}>
                        <div className={`p-3 rounded-2xl ${active === "notes" ? "bg-white shadow-sm" : ""}`}>
                            <FileText size={28} className={active === "notes" ? "text-blue-500" : "text-gray-400"} />
                        </div>
                    </Link>
                </div>

            </Header>
        </>
    )
}

export default HeaderComponent