const db = require("../configs/sequelize")

const {Model, DataTypes} = db.Sequelize

const sequelize = db.sequelize

class Proprietario extends Model{}
/*
Cria uma tabela chamada proprietarios com os seguintes campos
id
Nome
cpf 
telefone
*/
Proprietario.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    Nome:{
        type: DataTypes.STRING
   
    },
    cpf:{
        type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.BIGINT
    }
},{sequelize, modelName : "proprietarios"})


module.exports = Proprietario