import {Drawer, Button, Input, Tag} from "antd";
import {DataType} from "./Tasks.tsx";
import {DeleteOutlined} from "@ant-design/icons";
import {useState} from "react";

function DrawerComponent({closeModal, openModal, selectedData}: {
    closeModal?: () => void,
    openModal: boolean,
    selectedData: DataType
}) {
    const [taskData, setTaskData] = useState(selectedData);
    const handleChange = (key: keyof DataType, value: string) => {
        setTaskData({...taskData, [key]: value});


    };

    const handleUpdate = () => {
        console.log("Updated Data:", taskData);
        // Add update logic here
    };

    const handleDelete = () => {
        console.log("Deleted Task:", taskData.key);
        // Add delete logic here
    };
    return (
        <>
            <Drawer
                size="large"
                title={
                    <div className="flex justify-between items-center w-full">
                        <span>Task Details</span>
                        <Button type="text" icon={<DeleteOutlined/>} onClick={handleDelete}/>
                    </div>
                }
                onClose={closeModal}
                open={openModal}
            >
                <div className="flex flex-col gap-4">
                    <label>Task</label>
                    <Input
                        value={taskData.task}
                        onChange={(e) => handleChange("task", e.target.value)}
                    />

                    <label>Status</label>
                    <Input
                        value={taskData.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                    />

                    <label>Tags</label>
                    <div>
                        {taskData.tags.map((tag, index) => (
                            <Tag key={index} color="blue">
                                {tag}
                            </Tag>
                        ))}
                    </div>

                    <label>Due Date</label>
                    <Input
                        value={taskData.dueDate}
                        onChange={(e) => handleChange("dueDate", e.target.value)}
                    />

                    <label>Estimated Time</label>
                    <Input
                        value={taskData.estimatedTime}
                        onChange={(e) => handleChange("estimatedTime", e.target.value)}
                    />

                    <div className="flex justify-center mt-4">
                        <Button type="primary" onClick={handleUpdate}>
                            Update
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default DrawerComponent