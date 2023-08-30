import mongoose, { Schema, model } from "mongoose"

const UserSchema = new Schema({
    fullname: { type: String, required: true},
    nickname: { type: String, required: true},
    email: { type: String, required: true, unique:true},
    posts: [{type:mongoose.Schema.Types.ObjectId, ref: "Post"}]
}, {timestamps: true})

const User = model("user", UserSchema)

export {User}


