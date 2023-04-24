import { Sequelize } from "sequelize";

const db=new Sequelize('pruebaTecnica','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db