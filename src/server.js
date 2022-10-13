const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const routes = require('./routes/routes')

//Inicializando o express
const app = express()

//conexão com o banco de dados
db.connect()

//Endereços permitidos para acessar a api

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.siteteste.com.br'
]
//Habilitando o cors
app.use(cors({
  origin: function(origin, callback) {
    let allowed = true

    // app mobile
    if(!origin) allowed = true

    if(!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))

//Habilita o server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//Iniciando o servidor
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))