//Copiar dois arquivos TXT da pasta A para a pasta B
const gulp = require('gulp')
const { series, parallel } = require('gulp')//Importando series e parellel, que faz varias tarefas em série

//Cada função representa uma TASK, ou seja, tarefa

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

//cb é uma função passada para a função copiar pelo própio gulp, objetivo dela é retornar quando a função foi finalizada
function copiar(cb){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) Uma das formas
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Final das tarefas')
    return cb()
}

//module.exports.default para que o comando gulp encontre o gulpfile.js
module.exports.default = series(
    parallel(antes1,antes2), //Executa os dois em paralelo
    copiar,
    fim,
)