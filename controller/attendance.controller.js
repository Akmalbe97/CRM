const attendanceSchema = require("../schema/attendanceSchema");

const getAttendance = async (req, res, next) => {
  try {
    const groupAttendance = await attendanceSchema.find({groupName:req.params.groupName});

    res.json(groupAttendance)

  } catch (error) {
    res.status(500).json({
      message:"group not found"
    })
  }
}

const addAttendance = async (req, res, next) => {
  try {
    const {groupName, subject, teacher, students} = req.body;

    const newAttendance = await attendanceSchema.create({
      groupName,
      subject,
      teacher,
      students,
    })

    const savedAttendance = await newAttendance.save();
    res.status(201).json(savedAttendance)
  } catch (error) {
    res.status(400).json({
      message: "error saving attendance"
    })
  }
}


const updateAttendance = async (req, res, next) => {
  try {
    const {groupName, subject, teacher, students} = req.body;
    
  } catch (error) {
    
  }
}

module.exports = {
  getAttendance,
  addAttendance,
}