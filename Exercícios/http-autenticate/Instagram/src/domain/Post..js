import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
content: {type: String, required: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
}, {timestamps:true})

const Post = mongoose.model("Post", PostSchema)

export{Post}