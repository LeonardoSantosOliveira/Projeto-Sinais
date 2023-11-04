const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles/main.css'))
}

function comprimeImagem(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
}

exports.default = gulp.parallel(compilaSass, comprimeImagem)

exports.watch = function(){
    return gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass))
}