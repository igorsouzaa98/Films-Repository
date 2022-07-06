import * as repository from '../repositories/FilmRepository'

export const getAll = ()=>{
    return repository.getAll()
}

export const getById = (id: number)=>{
    return repository.getById(id)
}