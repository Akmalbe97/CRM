const {Schema,model} = require('mongoose')
const {v4} = require("uuid")

const attendanceSchema = new Schema({
  groupName:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
  },
  teacher:{
    type:String,
    required:true
  },
  students:[{
    studentName:{
      type:String,
      required:true,
    },
    status:{
      type:String,
      required:true
    }
  }],
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = model('attendance', attendanceSchema)