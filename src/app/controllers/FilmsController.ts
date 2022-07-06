import {Request, Response, Router} from "express"
import * as service from '../services/FilmService'

const router = Router()

router.get('/', (req: Request, res:Response)=>{
    service.getAll().then((films)=>{
        res.send(films)
    })
})

router.get('/:id',(req:Request, res:Response)=>{
    service.getById(parseInt(req.params.id)).then((film)=>{
        res.send(film)
    })
} )

router.post('/', (req:Request, res:Response)=>{
    service.create(req.body).then((film)=>{
        res.send(film)
    })
})

export default router