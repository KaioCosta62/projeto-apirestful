const express = require('express')
const db = require('./database/db')
const routes = require('./routes/routes')

//Inicializando o express
const app = express()

//conexão com o banco de dados
db.connect()

//Habilita o server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//Iniciando o servidor
const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))