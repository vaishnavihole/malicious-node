import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    default: "-",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

const User = model("User", userSchema);

export default User;