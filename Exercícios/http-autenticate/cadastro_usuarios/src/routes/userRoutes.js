import { Router } from "express"
import { MakeUser } from "../factories/MakeUser.js"

const userRoutes = Router()
const controller = MakeUser.getInstance()

    userRoutes.post("/users", controller.create.bind(controller))



export {userRoutes}