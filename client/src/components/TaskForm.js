import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = ({ isEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEdit) {
            axios.get(`http://localhost:5000/tasks/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setDescription(response.data.description);
                })
                .catch(error => console.error('There was an error fetching the task!', error));
        }
    }, [id, isEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = { title, description };

        if (isEdit) {
            axios.put(`http://localhost:5000/tasks/${id}`, task)
                .then(() => navigate('/'))
                .catch(error => console.error('There was an error updating the task!', error));
        } else {
            axios.post('http://localhost:5000/tasks/', task)
                .then(() => navigate('/'))
                .catch(error => console.error('There was an error creating the task!', error));
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">{isEdit ? 'Edit Task' : 'Create Task'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Title:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Description:</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        {isEdit ? 'Update' : 'Create'}
                    </button>
                </form>
                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-gray-500 text-white py-2 mt-4 rounded-lg hover:bg-gray-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default TaskForm;
