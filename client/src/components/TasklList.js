import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks/')
            .then(response => setTasks(response.data))
            .catch(error => console.error('There was an error fetching the tasks!', error));
    }, []);

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(response => setTasks(tasks.filter(task => task._id !== id)))
            .catch(error => console.error('There was an error deleting the task!', error));
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto"> 
            <h2 className="text-3xl font-bold mb-4 text-center">Task List</h2>
            <div className="flex justify-end mb-4">
                <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create New Task</Link>
            </div>
            <ul className="space-y-4">
                {tasks.map(task => (
                    <li key={task._id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100">
                        <Link to={`/edit/${task._id}`} className="text-xl font-medium text-blue-600 hover:underline">{task.title}</Link>
                        <button
                            type="button"
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            onClick={() => deleteTask(task._id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
