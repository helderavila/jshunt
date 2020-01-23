const express = require('express') // Importando o express
const cors = require('cors')
const mongoose = require('mongoose') // Importando o mongoose
const requireDir = require('require-dir')


// Iniciando o App
const app = express(); // Executa o express
app.use(express.json()) // Permitir que envie dados para app em formato de json
app.use(cors())

// Iniciando a DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/models')

// Iniciando Rota
app.use('/api', require('./src/routes'))

app.listen(3001) // App ouvir a porta 3001 do navegaDOR