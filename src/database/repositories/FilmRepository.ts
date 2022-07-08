import Film , {FilmInput, FilmOutput} from '../models/FilmModel'
import AppError from "../../utils/AppError";

export const getAll = async (): Promise <FilmOutput[]> =>{
    return  await Film.findAll()
}

export const getById = async (id: number): Promise <FilmOutput> => {
    const film = await Film.findByPk(id)

    if (!film) {
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return film
}

export const create = async (payload:FilmInput): Promise <FilmOutput> =>{
    return await Film.create(payload)
}

export const updateById = async (id: number, payload:FilmInput): Promise<FilmOutput> =>{
    const film = await Film.findByPk(id)

    if(!film){
        throw new Error('Register not found')
    }
    return await film.update(payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    const film = await Film.findByPk(id)

    if(!film){
        throw new Error('Id not found')
    }
    await film.destroy()
}