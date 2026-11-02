require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctors.routes.js');
const app = express();
const ConnectDB = require('./config/db.js');
const port = 3000;

app.use(express.json())
app.use('/', doctorRoutes);

ConnectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
