import model, {FilmInput} from '../models/FilmModel'

export const getAll = ()=>{
    return model.findAll()
}

export const getById = (id: number)=>{
    return model.findByPk(id)
}

export const create = (payload:FilmInput)=>{
    return model.create(payload)
}