const db = require("../configs/sequelize")

const { Model, DataTypes } = db.Sequelize;

const Proprietario = require('./../proprietario/model')

const sequelize = db.sequelize

class Imovel extends Model{}

/*
Cria uma tabela chamada imoveis com os seguintes campos
id
endereco
valor
FK
*/
Imovel.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    endereco:{
        type: DataTypes.STRING

    },
    valor:{
        type: DataTypes.DOUBLE
    }
},{sequelize})

Imovel.Proprietario = Imovel.belongsTo(Proprietario)

//A associação Imovel.belongsTo(Proprietario) significa que existe um relacionamento Um-para-Um 
//entre imovel e proprietario, com a chave estrangeira sendo definida no modelo de origem (Imovel).

module.exports = Imovel

