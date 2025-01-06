import { Schema } from 'mongoose';

const studentSchema = new Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    parentsName: { type: String, required: true },
    parentsPhoneNumber: { type: String, required: true },
    major: { type: String, required: true },
});

export default studentSchema;