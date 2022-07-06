import * as repository from '../repositories/FilmRepository'
import {FilmInput} from "../models/FilmModel"

export const getAll = ()=>{
    return repository.getAll()
}

export const getById = async (id: number)=>{
    return await repository.getById(id)
}

export const create = (payload:FilmInput)=>{
    return  repository.create(payload)
}

export  const updateById = (id: number, payload: FilmInput) =>{
    return repository.updateById(id, payload)
}