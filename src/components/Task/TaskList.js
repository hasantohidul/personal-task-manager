import React from "react";
import TaskItem from "./TaskItem";
import { ListGroup } from "react-bootstrap";

function TaskList({tasks, deleteTask}) {
    return (
        <ListGroup>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </ListGroup>
    )
};


export default TaskList;