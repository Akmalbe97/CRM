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
exports.addStudent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student_schema_1 = __importDefault(require("../schema/student.schema")); // Updated import path
const Student = mongoose_1.default.model('Student', student_schema_1.default); // Create a model from the schema
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, phoneNumber, parentsName, parentsPhoneNumber, major } = req.body;
        const newStudent = new Student({
            fullName,
            phoneNumber,
            parentsName,
            parentsPhoneNumber,
            major,
        });
        yield newStudent.save();
        res.status(201).json({ message: "O'quvchi qo'shildi", student: newStudent });
    }
    catch (error) {
        res.status(500).json({ message: "O'quvchini ro'yhatga olishda xatolik yuz berdi", error });
    }
});
exports.addStudent = addStudent;
