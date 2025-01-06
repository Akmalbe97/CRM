"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("../controller/student.controller"); // Updated import path
const router = (0, express_1.Router)();
// Define the route for adding a new student
router.post('/students', (req, res) => {
    (0, student_controller_1.addStudent)(req, res);
});
exports.default = router;
