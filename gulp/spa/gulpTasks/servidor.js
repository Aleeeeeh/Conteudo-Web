const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

//Servidor na porta 8080 com isso conseguimos usar a requisição ajax contida no arquivo de navegação.js
//ja minificada na pasta build/assets
function servidor(){
        return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open:true,//Se quer que abra o browser
            livereload:true //Reload automatico
        }))
    }

//Esta função atualiza sempre que fizermos um alteração no html por exemplo, ele atualiza automaticamente
function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')()) //Se um dos arquivos html mudar atualize
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}