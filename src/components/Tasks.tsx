import {Content} from "antd/es/layout/layout";
import {Flex, Table, Tag} from 'antd';
import type { TableProps } from 'antd';
import * as React from "react";
import {useState} from "react";
import DrawerComponent from "./DrawerComponent.tsx";

export interface DataType {
    key: string;
    task: string;
    status: string;
    tags: string[];
    dueDate: string;
    estimatedTime: string;
}
const columns: TableProps<DataType>['columns'] = [
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
const data: DataType[] = [
    {
        key: '1',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'In progress',
        tags: ['In progress'],
        dueDate : '2025/02/12',
        estimatedTime : '25h'
    },
    {
        key: '2',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'Completed',
        tags: ['Completed'],
        dueDate : '2025/02/12',
        estimatedTime : '25h'
    },
    {
        key: '3',
        task: 'lorem sadnojsadn sajdnas dasdsa sad sadsa dsadsad sa dsad sa dsa as',
        status: 'New Tasks',
        tags: ['New Tasks'],
        dueDate : '2025/02/12',
        estimatedTime : '25h'
    },
];
const tagsData = ['All','New Tasks','In Progress','Completed'];

function Tasks(){
    const [selectedData,setSelectedData] = useState<DataType>()
    const handleRowClick = (record: DataType, index: number | undefined) => {
        console.log('Clicked row index:', index);
        console.log('Clicked row data:', record);
        setSelectedData(record);
        setOpen(true)
        // Call your function here
    };
    const [selectedTags, setSelectedTags] = React.useState<string>('All');
    const handleChange = (tag: string) => {
        const nextSelectedTags = tag
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
        showDrawer()
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
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
                    <Table<DataType> columns={columns} dataSource={data} onRow={(record, index) => ({
                        onClick: () => handleRowClick(record, index),
                    })} />
                </div>
            </Content>
            {open && (
                <DrawerComponent closeModal={onClose} openModal={open} selectedData = {selectedData}/>
            )}
        </>


    )
}
export default Tasks