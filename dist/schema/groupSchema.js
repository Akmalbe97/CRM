"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const groupSchema = new mongoose_1.Schema({
    group_id: {
        type: String,
        default: (0, uuid_1.v4)(),
    },
    group_name: {
        type: String,
        required: true,
        max: [50, "The Group name cannot be longer than 50 characters"],
        unique: true
    },
    group_major: {
        type: String,
        required: true,
        min: [5, "group_major must not be less than 5 characters"],
        max: [50, "group_major cannot be longer than 50 characters"],
    },
    lesson_time: {
        type: String,
        required: true,
    },
    teacher_name: {
        type: String,
        required: true,
        min: [3, "group_major must not be less than 3 characters"],
        max: [40, "group_major cannot be longer than 40 characters"],
    },
    teacher_phone_num: {
        type: String,
        required: true,
        min: [9, "group_major must not be less than 9 characters"],
        max: [9, "group_major cannot be longer than 9 characters"],
    },
    teacher_img: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Group', groupSchema);
