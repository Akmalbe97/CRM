"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    parentsName: { type: String, required: true },
    parentsPhoneNumber: { type: String, required: true },
    major: { type: String, required: true },
});
exports.default = studentSchema;
