/*
 * Dependencias
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');
/*
 * Configuración de las tareas 'demo'
 */
gulp.task('demo', function () {
    gulp.src('js/source/*.js')
        .pipe(concat('compilacion.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});

gulp.task('sass', function () {
    return gulp.src('./wp-content/themes/ferias/assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wp-content/themes/ferias/assets/css/'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./wp-content/themes/ferias/assets/css/*.scss', ['sass']);
});