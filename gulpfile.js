"use strict";

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');

gulp.task('run', function () {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('lint',function () {
    return gulp.src(['js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('default', ['lint', 'run'])
