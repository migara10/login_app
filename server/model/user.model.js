import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Username Already Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  userName: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Email Already Exist"],
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: String },
  address: { type: String },
  profile: { type: String },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);
