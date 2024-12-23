import { Schema, model, Document } from "mongoose";
import { v4 } from "uuid";

export interface Payment extends Document {
  payment_id: string;
  student_id: string;
  payment_date: Date;
  amount: number;
}
const paymentSchema = new Schema<Payment>({
  payment_id: {
    type: String,
    default: v4(),
    min: [10, "The payment_id must be more than 10 characters"],
    max: [200, "The payment_id must be less than 200 characters"],
  },
  student_id: {
    type: String,
    min: [10, "The student_id must be more than 10 characters"],
    max: [200, "The student_id must be less than 200 characters"],
  },
  payment_date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const exportData = model<Payment>("Payments", paymentSchema);
export default exportData;
