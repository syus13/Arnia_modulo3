import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { Database } from './database/configDatabase.js'
import { userRoutes } from './routes/userRoutes.js'
import { authRouter } from './routes/authRouter.js'
import { postRouter } from './routes/postRouter.js'




Database.initialize()

const app = express()
const port = 3333

app.use(express.json())
app.use(userRoutes)
app.use(authRouter)
app.use(postRouter)

app.listen(port, () => console.log(`Server on, port ${port}`))

