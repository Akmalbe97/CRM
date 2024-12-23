const {Router} = require("express")
const { getOneAttendance, getAttendance, addAttendance, updateAttendance } = require("../controller/attendance.controller")

const attendanceRouter = Router()

attendanceRouter.get("/getAttendance",getAttendance)
attendanceRouter.get("/getOne:id",getOneAttendance)
attendanceRouter.post("/addAttendance",addAttendance)
attendanceRouter.put("updateAttendance:id", updateAttendance)

module.exports = attendanceRouter