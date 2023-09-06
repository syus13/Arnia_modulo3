import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    reserva: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reserva" }],
}, {timestamps:true})

const User = mongoose.model("User", UserSchema)

export {User}