import {Schema,model, Document} from 'mongoose'
import {v4 as uuid} from 'uuid'

// export interface Attendance extends Document {
//   group_id:string;
//   groupName: string;
//   subject: string;
//   teacher: string;
//   date:Date;
//   student: {
//     student_id: string;
//     status: boolean;
//   };
// }
const attendanceSchema = new Schema ({
  group_id:{
    type: String,
    required:true,
    default: uuid
  },
  groupName:{
    type:String,
    required:true,
    minlength:[3,"Group name must be at least 3 characters longs"],
    maxLength:[100, "group name must be Less than 100 characters Longs"]

  },
  subject:{
    type:String,
    required:true,
    minlength:[3,"Subject must be at least 3 characters longs"],
    maxLength:[100, "Subject must be Less than 100 characters Longs"]
  },
  teacher:{
    type:String,
    required:true,
    minlength:[3,"Subject must be at least 3 characters longs"],
    maxLength:[100, "Subject must be Less than 100 characters Longs"]
  },
  student: {
    student_id: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true
    }
  },
  date:{
    type:Date,
    default: Date.now
  }
})
const AttendanceSchema = model ('attendance', attendanceSchema)
export default AttendanceSchema
