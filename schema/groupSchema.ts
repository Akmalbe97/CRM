import { Schema, model, Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

interface Group extends Document {
  group_id: string;
  group_name: string;
  group_major: string;
  lesson_time: string;
  teacher_name: string;
  teacher_phone_num: string;
  teacher_img: string;
}

const groupSchema = new Schema<Group>({
  group_id: {
    type: String,
    default: uuid(),
  },
  group_name: {
    type: String,
    required: true,
    max: [50, "The Group name cannot be longer than 50 characters"],
    unique: true
  },
  group_major: {
    type: String,
    required: true,
    min: [5, "group_major must not be less than 5 characters"],
    max: [50, "group_major cannot be longer than 50 characters"],
  },
  lesson_time: {
    type: String,
    required: true,
  },
  teacher_name: {
    type: String,
    required: true,
    min: [3, "group_major must not be less than 3 characters"],
    max: [40, "group_major cannot be longer than 40 characters"],
  },
  teacher_phone_num: {
    type: String,
    required: true,
    min: [9, "group_major must not be less than 9 characters"],
    max: [9, "group_major cannot be longer than 9 characters"],
  },
  teacher_img: {
    type: String,
    required: true,
  },
}, 
{
  versionKey: false,
  timestamps: true,
});

export default model<Group>('Group', groupSchema);
