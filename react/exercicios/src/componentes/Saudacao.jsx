import React, {Component} from 'react'
//USAMO THIS NESSE CONTEXTO DE CLASSES
export default class Saudacao extends Component {
    //Estado podemos alterar
    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }

    constructor(props){
        super(props)
        // bind(this)para referenciar ao componente atual no caso o setTipo (campo tipo), com isso não é necessário
        //a função arrow com evento no parâmetro, pois já está sendo referenciado
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    //Com setNome usamos uma arrow function no onChange para disparar um evento e conseguir alterar o valor
    setNome(e){
        this.setState({nome:  e.target.value})
    }

    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome} !</h1>
                <hr/>
                <input type="text" placeholder="Tipo" value={tipo} onChange={this.setTipo}/>
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