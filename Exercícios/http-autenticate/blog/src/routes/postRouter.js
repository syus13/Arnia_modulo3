import { Router } from "express"
import { MakePost } from "../factories/MakePost.js"
import {AuthMiddleware} from "../app/middlewares/AuthMiddleware.js"

const postRouter = Router()
const controller = MakePost.getInstance()

const authMiddleware = AuthMiddleware.handler

postRouter.post("/users/id:/posts", authMiddleware, controller.create.bind(controller))

export{postRouter}

