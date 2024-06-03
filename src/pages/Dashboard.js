import React, {useState} from "react";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        setTasks([...tasks, task]);
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}

export default Dashboard;