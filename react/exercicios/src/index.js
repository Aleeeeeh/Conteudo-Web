import React from 'react'
import ReactDom from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//id root contido no arquivo index.html na pasta public, renderizando arquivo jsx no primeiro parâmetro

ReactDom.render(
    <div>
        <Pai nome='Alefe' sobrenome='Silva'>
        <Filho nome='Alane' />
        <Filho nome='Ayron' />
        </Pai>
    </div>, 
    document.getElementById('root'))