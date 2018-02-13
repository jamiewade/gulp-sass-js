var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');


//------------------------------------------------------------------------------------------------------
// SASS
//------------------------------------------------------------------------------------------------------

gulp.task('styles', function() {
    gulp.src('../source/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('../web/_/'));
});


//------------------------------------------------------------------------------------------------------
// JAVASCRIPT
//------------------------------------------------------------------------------------------------------
gulp.task('scripts', function() {
    gulp.src('../source/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../web/_/'))
});

//------------------------------------------------------------------------------------------------------
// WATCH
//------------------------------------------------------------------------------------------------------

gulp.task('watch', function () {
    gulp.watch('../source/sass/**/*.scss', ['styles']);
    gulp.watch('../source/js/*.js', ['scripts']);
});

gulp.task('default',['scripts', 'styles', 'watch']);
