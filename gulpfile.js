var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var webpack = require('gulp-webpack');

var paths = ['lib/*.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
    .pipe(lint({
      'rules': {
        'no-console': 0,
        'indent': [
          2,
          2
        ],
        'quotes': [
          2,
          'single'
        ],
        'linebreak-style': [
          2,
          'unix'
        ],
        'semi': [
          2,
          'always'
        ]
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'globals': {
        'describe': false,
        'it': false,
        'beforeEach': false,
        'afterEach': false,
        'before': false,
        'after': false
      },
      'ecmaFeatures': {
        'modules': true,
        'experimentalObjectRestSpread': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(lint.format());
});

gulp.task('test', function () {
  return gulp.src('test/*.js', {read: false})
	.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function () {
  gulp.watch('*.js', ['lint', 'test', 'build', 'html']);
});

gulp.task('buildwatch', function () {
  gulp.watch(['*.js', 'app/*.html', 'app/*.js', '*.css'], ['build', 'html']);
});

gulp.task('html', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('build', function() {
  return gulp.src(__dirname + '/app/index.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/build'));
});
