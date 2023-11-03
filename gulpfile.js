const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass(){
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles/main.css'))
}

exports.default = gulp.parallel(compilaSass)

exports.watch = function(){
    return gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass))
}