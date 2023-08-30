import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { Database } from './database/configDatabase.js'
import { userRoutes } from './routes/userRoutes.js'
import { authRouter } from './routes/authRouter.js'




Database.initialize()

const app = express()
const port = 3333

app.use(express.json())
app.use(userRoutes)
app.use(authRouter)


app.listen(port, () => console.log(`Server on, port ${port}`))