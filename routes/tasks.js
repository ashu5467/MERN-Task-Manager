const router = require('express').Router();
let Task = require('../models/task.model');

// Get all tasks
router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get task by ID
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create new task
router.route('/').post((req, res) => {
    const newTask = new Task(req.body);
    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update task by ID
router.route('/:id').put((req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete task by ID
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
