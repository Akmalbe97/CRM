const { Schema, model } = require("mongoose");
const { v4 } = require("uuid");

const paymentSchema = new Schema({
  payment_id: {
    type: String,
    default: v4(),
  },
  student_id: {
    type: String,
  },
  payment_date: {
    type: String,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = model("Payments", paymentSchema);
