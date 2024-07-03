import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TasklList';
import TaskForm from './components/TaskForm';

const App = () => (
    <Router>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="container mx-auto p-4 ">
                <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/create" element={<TaskForm isEdit={false} />} />
                    <Route path="/edit/:id" element={<TaskForm isEdit={true} />} />
                </Routes>
            </div>
        </div>
    </Router>
);

export default App;
