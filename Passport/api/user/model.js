const db = require("./../configs/sequelize")
const { Model, DataTypes } = db.Sequelize

const sequelize = db.sequelize

class Usuario extends Model { }
/*
Cria uma tabela chamada usuarios com os seguintes campos
name,
matricula,
login,
password
*/
Usuario.init({
    name: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.STRING
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "usuarios" })

module.exports = Usuario