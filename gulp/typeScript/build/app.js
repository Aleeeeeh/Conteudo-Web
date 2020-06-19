"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto"); //Importamos usando import do emca Script não do node
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
//Rodando esse código vai acusar erro, pois typeScript não é interpretado nativamente pelo node, não reconhece o sistema
//módulos, no exemplo o import
