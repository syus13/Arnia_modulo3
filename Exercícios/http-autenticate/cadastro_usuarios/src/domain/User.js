import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
 // photo: {type: String, required: true},
}, {timestamps: true});

const User = model("user", UserSchema)

export {User}