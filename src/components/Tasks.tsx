import {Content} from "antd/es/layout/layout";
import type {TableProps} from 'antd';
import {Flex, Table, Tag} from 'antd';
import * as React from "react";
import {useState} from "react";
import DrawerComponent from "./DrawerComponent.tsx";
import TaskModel from "../model/TaskModel.ts";

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
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'New Tasks') {
                        color = 'volcano';
                    }else if (tag === 'In Progress') {
                        color = 'geekblue'
                    }else if (tag === 'Completed') {
                        color = 'green';

                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Estimated Time',
        key: 'estimatedTime',
        dataIndex: 'estimatedTime',
    }

];
const data: TaskModel[] = [
    {
        task_id: '1',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'In progress',
        tags: ['In progress'],
        dueDate : '2025/02/12',
        time : '25h'
    },
    {
        task_id: '2',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'Completed',
        tags: ['Completed'],
        dueDate : '2025/02/12',
        time : '25h'
    },
    {
        task_id: '3',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'New Tasks',
        tags: ['New Tasks'],
        dueDate : '2025/02/12',
        time : '25h'
    },
    {
        task_id: '4',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'In progress',
        tags: ['In progress'],
        dueDate : '2025/02/12',
        time : '25h'
    },
    {
        task_id: '5',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'Completed',
        tags: ['Completed'],
        dueDate : '2025/02/12',
        time : '25h'
    },
    {
        task_id: '6',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'New Tasks',
        tags: ['New Tasks'],
        dueDate : '2025/02/12',
        time : '25h'
    },
];
const tagsData = ['All','New Tasks','In Progress','Completed'];

function Tasks(){
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