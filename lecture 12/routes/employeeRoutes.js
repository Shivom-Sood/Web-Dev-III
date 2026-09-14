const express=require("express");
const {
    getEmployees,
    getEmployeesById,
    addEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controller/employeeController.js");

const router=express.Router()

//Read Operation
router.get("/",getEmployees)
// get employee by their Id
router.get("/:id",getEmployeesById)
//create
router.post("",addEmployee)
//update
router.put("/:id",updateEmployee)
//delete
router.delete("/:id",deleteEmployee)

module.exports=router;
