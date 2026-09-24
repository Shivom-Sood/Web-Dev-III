const express = require('express');
const router = express.Router();
const students = require('../data/students');

// GET /students - all students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - one student
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }

  res.status(200).json(student);
});
// POST /students - add a new student
router.post('/', (req, res) => {
  const { name, course, age } = req.body;

  if (!name || !course || !age) {
    return res.status(400).json({ message: 'name, course and age are all required' });
  }

  const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  const newStudent = { id: newId, name, course, age };

  students.push(newStudent);
  res.status(201).json(newStudent);
});
module.exports = router;