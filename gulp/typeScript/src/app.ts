import { Carro, Vendavel } from './produto' //Importamos usando import do emca Script não do node

function exibir(v: Vendavel) { //Parâmetro v do tipo vendavel, pegamos nome e preco da interface vendavel
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)

//Rodando esse código vai acusar erro, pois typeScript não é interpretado nativamente pelo node, não reconhece o sistema
//módulos, no exemplo o import