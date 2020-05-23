const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
//Se a tag existir aplique a cor senão deixe a cor padrao de #616161
get(tag){
    return this[tag] ? this[tag] : this.padrao
    }
}
//Para mostrar o nome de cada elemento
document.querySelectorAll('.tag').forEach(elemento => {
    tagName = elemento.tagName.toLowerCase() //Peguei o nome da tag do elemento, para exibir com a fonte pequena

    elemento.style.borderColor = colors.get(tagName) //Aplicando uma cor na borda do elemento

    if(!elemento.classList.contains('nolabel')){ //Se não estiver classificado com nolabel, ou seja sem mostrar o nome do elemento
        const label = document.createElement('label')//Então adicionamos dentro do elemento um label
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) //Antes do primeiro elemento filho ali presente
    }
})