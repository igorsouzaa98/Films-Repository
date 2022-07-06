import model, {FilmInput, FilmOutput} from '../models/FilmModel'

export const getAll = (): Promise <FilmOutput[]> =>{
    return model.findAll()
}

export const getById = async (id: number): Promise <FilmOutput> => {
    const film = await model.findByPk(id)

    if (!film) {
        throw new Error('Register not found')
    }
    return film
}

export const create = (payload:FilmInput)=>{
    return model.create(payload)
}

export const updateById = (id: number, payload:FilmInput) =>{
    return model.update(payload,{
        where:{film_id:id}
    })
}