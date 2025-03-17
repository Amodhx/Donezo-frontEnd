import {Content} from "antd/es/layout/layout";
import type {TableProps} from 'antd';
import {Flex, Table, Tag} from 'antd';
import * as React from "react";
import {useEffect, useState} from "react";
import DrawerComponent from "./DrawerComponent.tsx";
import TaskModel from "../model/TaskModel.ts";
import {AppDispatch, RootState} from "../store/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../reducers/TaskSlices.ts";

const columns: TableProps<TaskModel>['columns'] = [
    {
        dataIndex: 'task',
        key: 'task',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Tags',
        key: 'status',
        dataIndex: 'status',
        render: (status) => {
            let color = 'default'; // Default color fallback

            switch (status) {
                case 'New Tasks':
                    color = 'volcano';
                    break;
                case 'In Progress':
                    color = 'geekblue';
                    break;
                case 'Completed':
                    color = 'green';
                    break;
                default:
                    color = 'default';
            }

            return <Tag color={color}>{status}</Tag>;
        },
    },
    {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Estimated Time',
        key: 'time',
        dataIndex: 'time',
    }

];

const tagsData = ['All','New Tasks','In Progress','Completed'];

function Tasks(){
    const dispatch  = useDispatch<AppDispatch>();
    useEffect(() => {
        if (data.length === 0){
            dispatch(getTasks())
        }
    }, []);
    const data : TaskModel[] = useSelector((state : RootState) => state.tasks);
    const [selectedData,setSelectedData] = useState<TaskModel>()
    const handleRowClick = (record: TaskModel) => {
        setSelectedData(record);
        setOpen(true)
    };
    const [selectedTags, setSelectedTags] = React.useState<string>('All');
    const handleChange = (tag: string) => {
        setSelectedTags(tag);
    };
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Content>
                <div className={'mx-4 mt-2'}>
                    <Flex gap={4} wrap align="center">
                        {tagsData.map<React.ReactNode>((tag) => (
                            <Tag.CheckableTag
                                key={tag}
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleChange(tag)}
                            >
                                {tag}
                            </Tag.CheckableTag>
                        ))}
                    </Flex>
                </div>
                <div className={'mx-2 mt-2'}>
                    <Table<TaskModel> columns={columns} dataSource={data} onRow={(record) => ({
                        onClick: () => handleRowClick(record),
                    })} />
                </div>
            </Content>
            {open && selectedData && (
                <DrawerComponent closeModal={onClose} openModal={open} selectedData = {selectedData}/>
            )}
        </>


    )
}
export default Tasks