const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Class = require('../models/class');
const Expense = require('../models/expense');
const Timetable = require('../models/timetable');
const Event = require('../models/event');

// Student routes
router.post('/students', (req, res) => {
    Student.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

router.get('/students', (req, res) => {
    // Logic to get all students
});

router.put('/students/:id', (req, res) => {
    // Logic to update a student
});

router.delete('/students/:id', (req, res) => {
    // Logic to delete a student
});

// Class routes
router.post('/classes', (req, res) => {
    Class.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

// Expense routes
router.post('/expenses', (req, res) => {
    Expense.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

// Timetable routes
router.post('/timetables', (req, res) => {
    Timetable.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

// Event routes
router.post('/events', (req, res) => {
    Event.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

module.exports = router;