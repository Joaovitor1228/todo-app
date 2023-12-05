const express = require("express")
const exphbs = require ("express-handlebars")
const app = express()
const mysql = require("mysql2")


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta) =>{
    resposta.render('home')
})
const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"todoapp",
    port:3306
})
