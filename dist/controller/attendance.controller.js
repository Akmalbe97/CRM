"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttendance = exports.addAttendance = exports.getOneAttendance = exports.getAttendance = void 0;
const attendanceSchema_1 = __importDefault(require("../schema/attendanceSchema"));
const getAttendance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groupAttendance = yield attendanceSchema_1.default.find({ groupName: req.params.groupName });
        res.json(groupAttendance);
    }
    catch (error) {
        res.status(500).json({
            message: "group not found"
        });
    }
});
exports.getAttendance = getAttendance;
const getOneAttendance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = req.query;
    try {
        const attendance = yield attendanceSchema_1.default.findOne({ groupName: req.params.groupId, date });
        res.json(attendance);
    }
    catch (error) {
        res.status(500).json({
            message: "attendance not found",
            error: error
        });
    }
});
exports.getOneAttendance = getOneAttendance;
const addAttendance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupName, subject, teacher, student } = req.body;
        const newAttendance = yield attendanceSchema_1.default.create({
            groupName,
            subject,
            teacher,
            student: {
                student_id: student.student_id,
                status: student.status
            },
        });
        const savedAttendance = yield newAttendance.save();
        res.status(201).json(savedAttendance);
    }
    catch (error) {
        res.status(400).json({
            message: "error saving attendance"
        });
    }
});
exports.addAttendance = addAttendance;
const updateAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, students } = req.body;
    try {
        const attendance = yield attendanceSchema_1.default.findOneAndUpdate({ groupName: req.params.groupId, date }, { $set: { students } }, { upsert: true, new: true });
        res.json(attendance);
    }
    catch (err) {
        res.status(400).json({ message: 'Davomatni saqlashda xatolik', error: err });
    }
});
exports.updateAttendance = updateAttendance;
