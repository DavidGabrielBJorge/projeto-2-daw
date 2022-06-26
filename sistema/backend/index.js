const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require("./src/configs/sequelize")
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

db.sequelize.sync({force: true}).then(()=>{
    console.log("Deu certo a criação do banco")
})

app.use(cors({
    origin: "http://localhost:3003",
    credentials:true,
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))
require('./src/proprietario/routes')(app)//inclui módulos que estão em arquivos separados
require('./src/imovel/routes')(app)
require('./src/aluguel/routes')(app)




var server = app.listen(3002, () =>{
    console.log("Servidor rodando na porta : "+ server.address.port+" no host : "+ server.address().address)
})

