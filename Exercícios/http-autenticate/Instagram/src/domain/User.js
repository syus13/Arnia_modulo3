import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    photo: { type: mongoose.Schema.Types.ObjectId, ref: "Photo" }
}, {timestamps: true})

const User = mongoose.model("User", UserSchema)

export{User}