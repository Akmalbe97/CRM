"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
// export interface Attendance extends Document {
//   group_id:string;
//   groupName: string;
//   subject: string;
//   teacher: string;
//   date:Date;
//   student: {
//     student_id: string;
//     status: boolean;
//   };
// }
const attendanceSchema = new mongoose_1.Schema({
    group_id: {
        type: String,
        required: true,
        default: uuid_1.v4
    },
    groupName: {
        type: String,
        required: true,
        minlength: [3, "Group name must be at least 3 characters longs"],
        maxLength: [100, "group name must be Less than 100 characters Longs"]
    },
    subject: {
        type: String,
        required: true,
        minlength: [3, "Subject must be at least 3 characters longs"],
        maxLength: [100, "Subject must be Less than 100 characters Longs"]
    },
    teacher: {
        type: String,
        required: true,
        minlength: [3, "Subject must be at least 3 characters longs"],
        maxLength: [100, "Subject must be Less than 100 characters Longs"]
    },
    student: {
        student_id: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const AttendanceSchema = (0, mongoose_1.model)('attendance', attendanceSchema);
exports.default = AttendanceSchema;
