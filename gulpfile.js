'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src(['./**/*.scss', '!.node_modules/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./**/*.scss', ['sass']);
};