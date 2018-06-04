//----------------------------------------------------------------------------------------------------
// Gulp Sass & JavaScript Compiler
// https://github.com/jamiewade/gulp-sass-js
//----------------------------------------------------------------------------------------------------

//--------------------------------------------------
// Environment variables
//--------------------------------------------------

var env = require('./env.json');
    destination = env.destination,
    cssFileName = env.generatedCssFileName,
    jsIncludeFile = env.jsIncludeFile,
    jsFileName = env.generatedJsFileName,
    jsFolder = env.jsFolder,
    productionMode = env.productionMode,
    sassIncludeFile = env.sassIncludeFile,
    sassFolder = env.sassFolder;


//--------------------------------------------------
// Dependencies
//--------------------------------------------------

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    color = require('gulp-color'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    include = require('gulp-include'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');


// Only run the tasks if a destination folder has been defined
if (destination) {

    //--------------------------------------------------
    // Sass
    //--------------------------------------------------

    gulp.task('styles', function() {
        if (sassIncludeFile) {
            gulp.src(sassIncludeFile)
                .pipe(sass().on('error', sass.logError))
                .pipe(gulpif(productionMode == true, cleanCSS({compatibility: 'ie8'})))
                .pipe(autoprefixer())
                .pipe(concat(cssFileName + '.css'))
                .pipe(gulp.dest(destination));
        } else {
            console.log(color('You need to specify which folder contains your Sass files. Check env.example.json for an example.', 'RED'));
            process.exit();
        }
    });


    //--------------------------------------------------
    // JavaScript
    //--------------------------------------------------

    gulp.task('scripts', function() {
        if (jsFolder) {
            gulp.src(jsFolder + '*.js')
                .pipe(include())
                .pipe(concat(jsFileName + '.js'))
                .pipe(gulpif(productionMode == true, uglify()))
                .pipe(gulp.dest(destination))
        } else {
            console.log(color('You need to specify which folder contains your JavaScript files. Check env.example.json for an example.', 'RED'));
            process.exit();
        }
    });

} else {
    console.log(color('You need to specify the destination folder for your generated files. Check env.example.json for an example.', 'RED'));
    process.exit();
}


//--------------------------------------------------
// Watch
//--------------------------------------------------

gulp.task('watch', function () {
    gulp.watch(sassFolder + '/**/*.scss', ['styles']);
    gulp.watch(jsFolder + '/**/*.js', ['scripts']);
});

gulp.task('default',['styles', 'scripts', 'watch']);
