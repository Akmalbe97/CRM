import attendanceSchema from "../schema/attendanceSchema";
import { Request, Response, NextFunction } from "express";

export const getAttendance = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const groupAttendance = await attendanceSchema.find({groupName:req.params.groupName});

    res.json(groupAttendance)

  } catch (error) {
    res.status(500).json({
      message:"group not found"
    })
  }
}

export const getOneAttendance = async (req: Request, res: Response, next: NextFunction) => {
  const {date}= req.query;
  try {
    const attendance = await attendanceSchema.findOne({groupName:req.params.groupId, date})
    res.json(attendance)
  } catch (error) {
    res.status(500).json({
      message:"attendance not found",
      error: error
    })
  }
}

export const addAttendance = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const {groupName, subject, teacher, student}: {groupName:string, subject: string, teacher: string, student:{student_id: string, status: boolean}} = req.body;

    const newAttendance = await attendanceSchema.create({
      groupName,
      subject,
      teacher,
      student: {
        student_id: student.student_id,
        status: student.status
      },
      
    })

    const savedAttendance = await newAttendance.save();
    res.status(201).json(savedAttendance)
  } catch (error) {
    res.status(400).json({
      message: "error saving attendance"
    })
  }
}

export const updateAttendance = async (req: Request, res: Response) => {
  const { date, students }: {date: Date, students: string} = req.body;

  try {
    const attendance = await attendanceSchema.findOneAndUpdate(
      { groupName: req.params.groupId, date },
      { $set: { students } },
      { upsert: true, new: true }
    );
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ message: 'Davomatni saqlashda xatolik', error: err });
  }
};