var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config_webpack = require('./webpack.config.js');

gulp.task('default', function() {
  return gulp.src('src/**/*.js')
    .pipe(webpack(config_webpack))
    .pipe(gulp.dest(config_webpack.output.path));
});

gulp.task('minify', function() {
  var uglify = require('gulp-uglify');
  return gulp.src('htdocs/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('htdocs/js'));
});

gulp.task('lint', function() {
  var eslint   = require('gulp-eslint');
  return gulp.src('src/**/*.js')
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
