import { Schema, model } from "mongoose"

const PostSchema = new Schema({
    content: {type: String, require: true, minLength: 3},
    like: {type: Number, default: 0, min: 0 }
}, {timestamps: true})

const Post = model("post", PostSchema)
export{Post}