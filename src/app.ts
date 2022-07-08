// @ts-ignore
import express, {Express, Response, Request, NextFunction} from 'express'
import connection from './database/sequelize'
// @ts-ignore
import bodyParser from 'body-parser'
import routes from './api/routes/index'
import AppError from './utils/AppError'


const app: Express = express()
const port: number = 7777

app.use(bodyParser.json())

app.use('/api/v1', routes)

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello World Express + Typescript !!')
})

app.use((err:AppError, req:Request, res:Response, next:NextFunction)=>{
    console.log(err.stack)
    res.status(err.getHttpCode()).send(err.getError())
})

app.listen(port, ()=>{
    console.log(`Server Connected on port: ${port}`)
})

connection()