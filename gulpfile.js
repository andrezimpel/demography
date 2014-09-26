var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('path');


// ------------------------------------------


// paths
var paths = {
  scripts: ['src/js/**/*.js']
};

gulp.task('scripts', function() {
  gulp.src([
            './bower_components/bowser/bowser.js',
            './src/js/handle.js'
            ])
    // .pipe(uglify())
    .pipe(concat('demography.js'))
    .pipe(gulp.dest('./dist/js'));
});

// ------------------------------------------


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);
