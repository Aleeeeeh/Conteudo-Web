//Neste exemplo quando passamos um valor no parâmetro de ReacDom.render(Bomdia nome="Alefe"), referenciar aqui
//Props de propriedade, mas pode ser qualquer nome
import React from 'react'

//Envolver dentro de uma div para mais de um componente, poderiamos colocar dentro de um array
export default props =>
<div>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve !</h2>
</div>

/**
 * Para que não conste no código o h1 e h2 envolvido em uma div que está dentro da div com id root, podemos usar o
 * Fragment, com isso ambos componentes estarão direto no div do root
 * 
 * import React, {Fragment} from 'react'
 * 
 * export default props =>
<Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve !</h2>
</Fragment>

 * 
 */

 /* 
=== No caso do array colocar as key nas tags com nomes diferentes ===

 export default props => [
    <h1 key ='h1'>Bom dia {props.nome}!</h1>
    <h2 key ='h2'>Até breve !</h2>
]
 */