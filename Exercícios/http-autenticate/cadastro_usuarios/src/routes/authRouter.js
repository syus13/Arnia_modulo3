import { Router } from "express"
import {MakeAuth} from "../factories/MakeAuth.js"

const authRouter = Router()
const controller = MakeAuth.getInstance()

authRouter.post("/login", controller.login.bind(controller))

export {authRouter}