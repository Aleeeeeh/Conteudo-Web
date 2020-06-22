const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

//Com src/**/* pegamos as pastas diretamente
function appHTML(cb){
    return gulp.src('src/**/*.html')//Todo conteudo html dentro de src
    .pipe(htmlmin({ collapseWhitespace: true})) //Tirar os espaços em branco
    .pipe(gulp.dest('build'))
}
//Index do sass pois ja tem o import do demais arquivos sass
function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss({ "uglyComments":true})) //Para que não saia comentarios no arquivo minificado
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel( {presets: ['ENV']} ))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')//Pega todas imgs independente dos formatos
    .pipe(gulp.dest('build/assets/imgs'))
}

//Registrando nome para função, para que não haja erro quando modificarmos um arquivo e o watch não conseguir
//Atualizar, detalhe se o series fosse usado ja funcionaria mas no exemplo, vamos por nome
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}