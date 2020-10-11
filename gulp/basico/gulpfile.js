const gulp = require('gulp')
const series = gulp.series

const tarefa1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const tarefa2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copia(cb) {
   // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) Uma Maneira
   gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Final')
    return cb()
}

module.exports.default = series(
    tarefa1,
    tarefa2,
    copia,
    fim
)