import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { createUser } from './app/modules/users/users.service'
import userRoutes from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('working Successfully')
})

export default app
