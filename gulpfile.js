var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

//------------------------------------------------------------------------------------------------------
// SASS
//------------------------------------------------------------------------------------------------------

gulp.task('styles', function() {
	gulp.src('../source/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('../public/_/'));
});


//------------------------------------------------------------------------------------------------------
// JAVASCRIPT
//------------------------------------------------------------------------------------------------------
gulp.task('scripts', function() {
	gulp.src('../source/js/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../public/_/'))
});

//------------------------------------------------------------------------------------------------------
// WATCH
//------------------------------------------------------------------------------------------------------

gulp.task('watch', function () {
	gulp.watch('../source/sass/**/*.scss', ['styles']);
	gulp.watch('../source/js/*.js', ['scripts']);
});

gulp.task('default',['scripts', 'styles', 'watch']);