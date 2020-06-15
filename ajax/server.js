const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//MIDDLEWARES
//Prover todos arquivos estáticos da aplicação, ou seja, tudo que está contido na pasta ajax
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:true}))//Através de um submit de um fornulário será convertido para objeto
app.use(bodyParser.json())//Se vier um arquivo Json será convertido para objeto

/*Multer para interpretar o arquivo que veio do upload, parte contida no arquivo 2 xml*/
const multer = require('multer')
/*O diskStorage configuramos a pasta do upload e atribuimos a data atual e o nome do arquivo */
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
/*Função single trazendo o input através de seu nome que é arquivo*/
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso')
    })
})



app.listen(8080, () => console.log('Servidor rodando na porta 8080'))

