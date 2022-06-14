const express = require('express')
const session = require('express-session');

/*
ARQUIVO .ENV 

DB_NAME = 'aula2'
DB_HOST = 'localhost'
DB_USER = 'postgres'
DB_PORT = 5432
DB_PASS = 'admin'
DB_DIALECT = 'postgres'
SECRET = 'segredo',
SESSION_NAME = 'minhasecao'
SESSION_TIME = '6000'

*/


/*
{
    "name" : "admin",
    "matricula" : "987654321-A",
    "login" : "admin",
    "password":"123"
}

 {
        "id": 1,
        "name": "admin",
        "matricula": "987654321-A",
        "login": "admin",
        "password": "$2b$10$swyFGU74.EcobNjSIjrTduk7OtzjoMfqOJBSzrnxxgD7STAAqXZ.6",
        "createdAt": "2022-05-30T16:11:49.207Z",
        "updatedAt": "2022-05-30T16:11:49.207Z"
    }
*/

const LocalPass = require('./configs/passport');

require('dotenv').config();


//Inicialização do express
const app = express();

app.use(express.static('public'))

//Carrega o sequelize e faz a sincronização com o BD
const db = require('./configs/sequelize');

db.sync();
/*
 db.sequelize.sync({force: true}).then(()=>{
    console.log("Deu certo a criação do banco")
}) 
*/
//Esta função realiza as configurações do passport
LocalPass.configuration();

//Criação da seção
app.use(session({
    secret: process.env.SECRET,
    name: process.env.SESSION_NAME,
    cookie: { maxAge: parseInt(process.env.SESSION_TIME) },
    resave: false,
    saveUninitialized: false
})
);

//Inicializando o passport e também o modo de sessão de usuário
app.use(LocalPass.passport.initialize());
app.use(LocalPass.passport.session());

//Carrega as configs para o express trabalhar com json
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Rota de login da aplicação
app.post('/login', LocalPass.passport.authenticate('local', {
    successRedirect: 'https://www.google.com/',
    failureRedirect: '/404'
}));


//Rotas da entidade usuários
require('./user/routes')(app)

//Inicializa o servidor da aplicação
var server = app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001 no host " + server.address.address)
})