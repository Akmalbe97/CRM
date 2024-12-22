const {Router} = require("express")

const attendanceRouter = Router()

attendanceRouter.get("/getAttendance",getAttendance)