const gulp = require('gulp')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

//Pasta css do node_modules
function depsCSS(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifyCss({ "uglyComments" : false }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}
//Pasta fonts do node_modules
function depsFonts(){
    return gulp.src('node_modules/font-awesome/fonts/*.*')//Tudo contido na pasta fonts
    .pipe(gulp.dest('build/assets/fonts'))//Apenas enviando sem mimificar o arquivo como depsCSS
}

module.exports = {
    depsCSS,
    depsFonts
}