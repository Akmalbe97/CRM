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

const getOneAttendance = async (req, res, next) => {
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


const updateAttendance = async (req, res) => {
  const { date, students } = req.body;

  try {
    const attendance = await updateAttendance.findOneAndUpdate(
      { groupName: req.params.groupId, date },
      { $set: { students } },
      { upsert: true, new: true }
    );
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ message: 'Davomatni saqlashda xatolik', error: err });
  }
};


module.exports = {
  getAttendance,
  addAttendance,
  updateAttendance,
  getOneAttendance
}