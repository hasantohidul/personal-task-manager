import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), task, priority, completed: false });
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Control>
        <Button variant="success" type="submit">
          Add Task
        </Button>
      </Form.Group>
    </Form>
  );
}

export default TaskForm;