import React from 'react'
import ReactDom from 'react-dom'
import  Saudacao from './componentes/Saudacao'

//id root contido no arquivo index.html na pasta public, renderizando arquivo jsx no primeiro parâmetro

ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Alane"/>
    </div>, 
    document.getElementById('root'))