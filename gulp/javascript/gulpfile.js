//RESUMO - Pegamos os 2 arq js sem relação e com gulp unimos em arquivo só, e com isso executando
//node build/codigo.min.js temos funcionando
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments:false,//Arquivos de comementários não saia no arquivo final
        presets:["env"]//Pegar o conteudo mais moderno para uma versao mais compativel 
    }))
    .pipe(uglify()) //Mimificar o arquivo
    .pipe(concat('codigo.min.js'))//Todos os arquivos prontos concatenados, nome de exemplo
    .pipe(gulp.dest('build')) //Resultado jogado neste pasta

    return cb()
}

function fim(cb){
    console.log('Fim !')

    return cb()
}

//A função fim será executada primeiro pois é menor
exports.default = series(padrao, fim) 