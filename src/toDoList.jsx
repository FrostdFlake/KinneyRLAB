import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleEditTask = (index) => {
        const updatedTasks = [...tasks];
        const updatedTaskText = prompt('Edit Task:', tasks[index].text);
        if (updatedTaskText !== null) {
            updatedTasks[index].text = updatedTaskText;
            setTasks(updatedTasks);
        }
    };

    const handleToggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => handleEditTask(index)}>Edit</button>
                        <button onClick={() => handleToggleComplete(index)}>
                            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
