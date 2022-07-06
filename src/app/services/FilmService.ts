import * as repository from '../repositories/FilmRepository'
import {FilmInput} from "../models/FilmModel"

export const getAll = ()=>{
    return repository.getAll()
}

export const getById = (id: number)=>{
    return repository.getById(id)
}

export const create = (payload:FilmInput)=>{
    return  repository.create(payload)
}