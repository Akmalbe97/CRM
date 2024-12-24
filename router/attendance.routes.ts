import {Router} from "express"
import { getOneAttendance, getAttendance, updateAttendance, addAttendance } from "../controller/attendance.controller"

const attendanceRouter:Router = Router()

attendanceRouter.get("/getAttendance",getAttendance)
attendanceRouter.get("/getOne:id",getOneAttendance)
attendanceRouter.post("/addAttendance",addAttendance)
attendanceRouter.put("updateAttendance:id", updateAttendance)

export default attendanceRouter