import React, {Component} from 'react'

export default class Saudacao extends Component {

    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }

    setTipo(e){
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome:  e.target.value})
    }

    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome} !</h1>
                <hr/>
                <input type="text" placeholder="Tipo" value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}

/**
 * Importamos o react e o component que usamos quando vamos criar componentes de classe herdamos dele.
 * Dentro de render declaramos tipo e nome em uma constante e acessamos esses dois componentes com o uso do this.
 * Retorna a div mostrando tipo e nome e embaixo um input de formulário preenchido com os mesmos dados de tipo e nome.
 * 
 * Atualizar o valor do input
 * State atruimos o valor inicial;
 * const tipo e nome = this.state
 * Função set tipo dispara um evento ao clicar no campo e nos permite atualizar o valor;
 */