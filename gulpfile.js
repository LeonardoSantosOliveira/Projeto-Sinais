const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

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

function comprimeJS(){
    return gulp.src('./src/script/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'))
}

exports.default = gulp.parallel(compilaSass, comprimeImagem, comprimeJS)

exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass)) 
    gulp.watch('./src/script/**/*.js', gulp.parallel(comprimeJS))
}