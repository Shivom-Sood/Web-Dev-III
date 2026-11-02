const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctors.controller.js');

// Read all doctors
router.get('/api/doctors', getDoctors);

// Get doctor by id
router.get('/api/doctors/:id', getDoctorById);

// Create doctor
router.post('/api/doctors', addDoctor);

// Update doctor
router.put('/api/doctors/:id', updateDoctor);

// Delete doctor
router.delete('/api/doctors/:id', deleteDoctor);

module.exports = router;