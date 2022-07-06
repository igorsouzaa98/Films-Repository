import model from '../models/FilmModel'

export const getAll = ()=>{
    return model.findAll()
}

export const getById = (id: number)=>{
    return model.findByPk(id)
}