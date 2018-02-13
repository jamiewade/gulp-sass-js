//------------------------------------------------------------------------------------------------------
// Environment variables
//------------------------------------------------------------------------------------------------------

var env = require('./env.json');
    destination = env.destination,
    jsFolder = env.jsFolder,
    generatedJsFile = env.generatedJsFile,
    productionMode = env.productionMode,
    sassFile = env.sassFile;


//------------------------------------------------------------------------------------------------------
// Dependencies
//------------------------------------------------------------------------------------------------------

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    color = require('gulp-color'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');


// Only run the tasks if a destination folder has been defined
if (destination) {

    //------------------------------------------------------------------------------------------------------
    // Sass
    //------------------------------------------------------------------------------------------------------

    gulp.task('styles', function() {
        if (sassFile) {
            gulp.src(sassFile)
                .pipe(sass().on('error', sass.logError))
                .pipe(gulpif(productionMode == true, cleanCSS({compatibility: 'ie8'})))
                .pipe(autoprefixer())
                .pipe(gulp.dest(destination));
        } else {
            console.log(color('ERROR', 'RED'));
            console.log(color('You need to specify which folder contains your Sass files. Check env.example.json for an example.', 'RED'));
            process.exit();
        }
    });


    //------------------------------------------------------------------------------------------------------
    // JavaScript
    //------------------------------------------------------------------------------------------------------

    var condition = false;

    gulp.task('scripts', function() {
        if (jsFolder) {
            gulp.src(jsFolder + '*.js')
                .pipe(concat(generatedJsFile))
                .pipe(gulpif(productionMode == true, uglify()))
                .pipe(gulp.dest(destination))
        } else {
            console.log(color('ERROR', 'RED'));
            console.log(color('You need to specify which folder contains your JavaScript files. Check env.example.json for an example.', 'RED'));
            process.exit();
        }
    });

} else {
    console.log(color('ERROR', 'RED'));
    console.log(color('You need to specify the destination folder for your generated files. Check env.example.json for an example.', 'RED'));
    process.exit();
}


//------------------------------------------------------------------------------------------------------
// Watch
//------------------------------------------------------------------------------------------------------

gulp.task('watch', function () {
    gulp.watch('../source/sass/**/*.scss', ['styles']);
    gulp.watch('../source/js/*.js', ['scripts']);
});

gulp.task('default',['styles', 'scripts', 'watch']);
