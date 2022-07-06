import {Request, Response, Router} from "express"
import * as service from '../services/FilmService'

const router = Router()

router.get('/', (req: Request, res:Response)=>{
    service.getAll().then((films)=>{
        res.send(films)
    })
})

router.get('/:id', async (req:Request, res:Response)=>{
        res.send(await service.getById(parseInt(req.params.id)))
} )

router.post('/', (req:Request, res:Response)=>{
    service.create(req.body).then((film)=>{
        res.status(201).send(film)
    })
})

router.put('/:id',(req:Request, res:Response)=>{
    service.updateById(parseInt(req.params.id), req.body).then((film)=>{
        res.send(film)
    })
} )

export default router