import { Request, Response } from 'express';
import mongoose from 'mongoose';
import studentSchema from '../schema/student.schema'; // Updated import path

const Student = mongoose.model('Student', studentSchema); // Create a model from the schema

export const addStudent = async (req: Request, res: Response) => {
    try {
        const { fullName, phoneNumber, parentsName, parentsPhoneNumber, major } = req.body;

        const newStudent = new Student({
            fullName,
            phoneNumber,
            parentsName,
            parentsPhoneNumber,
            major,
        });

        await newStudent.save();
        res.status(201).json({ message: "O'quvchi qo'shildi", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "O'quvchini ro'yhatga olishda xatolik yuz berdi", error });
    }
};