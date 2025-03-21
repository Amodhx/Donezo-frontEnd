import {Drawer, Button, Input, Tag, Select, DatePicker, TimePicker} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useState} from "react";
import TaskModel from "../model/TaskModel.ts";
import dayjs from 'dayjs';
import {AppDispatch} from "../store/Store.ts";
import {useDispatch} from "react-redux";
import {toast} from "react-hot-toast";
import {deleteTask, updateTask} from "../reducers/TaskSlices.ts";

const { Option } = Select;

function DrawerComponent({closeModal, openModal, selectedData}: {
    closeModal?: () => void,
    openModal: boolean,
    selectedData: TaskModel
}) {
    const [taskData, setTaskData] = useState(selectedData);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (key: keyof TaskModel, value: string) => {
        setTaskData({...taskData, [key]: value});
    };

    const handleUpdate = () => {
        toast.promise(
            new Promise((resolve) => {
                setTimeout(() => {
                    dispatch(updateTask(taskData));
                    resolve(null); // Resolve after a fixed time
                }, 1000); // Set the delay (e.g., 2 seconds)
            }),
            {
                loading: 'Updating...',
                success: <b>Task Updated</b>,
                error: <b>Could not update.</b>,
            }
        );

        if (closeModal){
            closeModal()
        }

    };

    const handleDelete = () => {
        toast.promise(
            new Promise((resolve) => {
                setTimeout(() => {
                    dispatch(deleteTask(taskData));
                    resolve(null); // Resolve after a fixed time
                }, 1000); // Set the delay (e.g., 2 seconds)
            }),
            {
                loading: 'Deleting...',
                success: <b>Task Deleted!!</b>,
                error: <b>Could not delete.</b>,
            }
        );

        if (closeModal){
            closeModal()
        }
    };

    return (
        <Drawer
            size="large"
            title={
                <div className="flex justify-between items-center w-full">
                    <span>Task Details</span>
                    <Button type="text" icon={<DeleteOutlined />} onClick={handleDelete} />
                </div>
            }
            onClose={closeModal}
            open={openModal}
        >
            <div className="flex flex-col gap-4">
                {/* Task */}
                <label>Task</label>
                <Input
                    value={taskData.task}
                    onChange={(e) => handleChange("task", e.target.value)}
                />

                {/* Status (ComboBox) */}
                <label>Status</label>
                <Select
                    value={taskData.status}
                    onChange={(value) => handleChange("status", value)}
                    style={{ width: '100%' }}
                >
                    <Option value="Pending">Pending</Option>
                    <Option value="In Progress">In Progress</Option>
                    <Option value="Completed">Completed</Option>
                </Select>

                {/* Tags */}
                <label>Tags</label>
                <div>
                    <Tag color="blue">
                        {taskData.status}
                    </Tag>
                </div>

                {/* Due Date (DatePicker) */}
                <label>Due Date</label>
                <DatePicker
                    value={taskData.dueDate ? dayjs(taskData.dueDate) : null}
                    onChange={(_date, dateString) => handleChange("dueDate", dateString as string)}
                    style={{ width: '100%' }}
                />

                {/* Estimated Time (TimePicker) */}
                <label>Estimated Time</label>
                <TimePicker
                    value={taskData.time ? dayjs(taskData.time, 'HH:mm') : null}
                    onChange={(_time, timeString) => handleChange("time", timeString as string)}
                    format="HH:mm"
                    style={{ width: '100%' }}
                />

                <div className="flex justify-center mt-4">
                    <Button type="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </div>
            </div>
        </Drawer>
    );
}

export default DrawerComponent;
