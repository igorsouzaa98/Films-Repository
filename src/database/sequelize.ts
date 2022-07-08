import {Error, Sequelize} from "sequelize"
export  const sequelize = new Sequelize('Dvd', 'postgres', 'Iguinho12', {
    host:'localhost',
    dialect:'postgres',
    define:{
        freezeTableName: true,
        timestamps:false
    },
    logging:false
})

export default ()=>{
    sequelize
        .authenticate()
        .then(()=>{
            console.log('Connection done!')
        })
        .catch((error: Error)=>{
            console.log(`Connection node made: ${error}`)
        })
}