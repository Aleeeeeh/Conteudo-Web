import React from 'react'

const BomDia = props => <h1>Bom dia {props.nome}!</h1>
const BoaTarde = props => <h1>BoaTarde {props.nome}!</h1>

export {BomDia, BoaTarde}

//Outra forma é por default retornando através de um objeto
export default {BomDia}

/**
 * No arquivo index.js componentes exportados por default usamos uma label qualquer exemplo:
 * import bla from './componentes/Multiplos
 * 
 * ReactDom.render(
 * <div>
 *      <bla.bomdia nome='Alefe'/>
 * </div>
 * )
 */