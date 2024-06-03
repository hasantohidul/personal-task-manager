import React from "react";
import { ListGroup, Button } from "react-bootstrap";

function TaskItem({ task, deleteTask }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{task.task}</span>
      <span className="badge bg-primary priority-badge">{task.priority}</span>
      <Button variant="danger" onClick={() => deleteTask(task.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
}

export default TaskItem;