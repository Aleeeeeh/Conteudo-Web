const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//MIDDLEWARES
//Prover todos arquivos estáticos da aplicação, ou seja, tudo que está contido na pasta ajax
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:true}))//Através de um submit de um fornulário será convertido para objeto
app.use(bodyParser.json())//Se vier um arquivo Json será convertido para objeto

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))

