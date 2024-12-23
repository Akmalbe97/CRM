"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const paymentSchema = new mongoose_1.Schema({
    payment_id: {
        type: String,
        default: (0, uuid_1.v4)(),
        min: [10, "The payment_id must be more than 10 characters"],
        max: [200, "The payment_id must be less than 200 characters"],
    },
    student_id: {
        type: String,
        min: [10, "The student_id must be more than 10 characters"],
        max: [200, "The student_id must be less than 200 characters"],
    },
    payment_date: {
        type: Date,
        default: Date.now,
    },
    amount: {
        type: Number,
        required: true,
    },
});
const exportData = (0, mongoose_1.model)("Payments", paymentSchema);
exports.default = exportData;
