import { Router } from "express";
import { MakeUser } from "../factories/Makeuser.js";
import {AuthMiddleware} from "../app/middleware/AuthMiddleware.js"

const userRouter = Router()

const controller = MakeUser.getInstance()

userRouter.post("/users", controller.create.bind(controller))
//userRouter.use(AuthMiddleware.handler)
userRouter.get("/users", controller.findAll.bind(controller))

export{userRouter}

