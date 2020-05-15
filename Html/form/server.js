const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//Interpreta o urlencoded e tranforma em objeto para nós
app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body) //Verermos o que está sendo enviado no corpo da requisição
    resp.send('<h1>Parabéns.Usuário Incluido com sucesso</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id) //Iremos ver o id do usuário em questão
    console.log(req.body) 
    resp.send('<h1>Parabéns.Usuário Alterado com sucesso!</h1>')
})

app.listen(3003, () => {console.log('Servidor Funcionando na porta 3003')}) 