const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./doctors.model.js');
const app = express();
const PORT = 3000;

app.get('/doctors', async (req, res) =>{
    try{
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
});
mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(PORT, () => {
    console.log('Server is runing on http://localhost:${port}');
})