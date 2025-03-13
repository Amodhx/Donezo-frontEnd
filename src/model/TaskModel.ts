class TaskModel{
    task_id: string
    task: string
    status: string
    tags: string[]
    dueDate : string
    time : string

    constructor(task_id: string, task: string, status: string, tags: string[], dueDate: string, time: string) {
        this.task_id = task_id;
        this.task = task;
        this.status = status;
        this.tags = tags;
        this.dueDate = dueDate;
        this.time = time;
    }
}
export default TaskModel;