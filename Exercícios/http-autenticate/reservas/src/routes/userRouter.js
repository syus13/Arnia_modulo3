import { Router } from "express";
import { Database } from "../database/configDatabase.js";
import { MakeUser } from "../factories/Makeuser.js";

const userRouter = Router()

const controller = MakeUser.getInstance()

userRouter.post("/users", controller.create.bind(controller))

export{userRouter}