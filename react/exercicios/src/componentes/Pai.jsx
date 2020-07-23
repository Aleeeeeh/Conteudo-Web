import React from 'react'
import {childrenWithProps} from '../utils/utils'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>FILHOS</h2>
        <ul>
             {childrenWithProps(props)}  
        </ul>
    </div>

/* React.cloneElement funciona apenas para um elemenento filho, poi isso foi preciso utilizar outro método
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>FILHOS</h2>
        <ul>
            {
                React.cloneElement(props.children, {
                    ...props, ...props.children.props
                })
             }
        </ul>
    </div> */