'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');  // local server
var open = require('gulp-open');        // to open url
var browserify = require('browserify'); // Bundles the javascript files
var reactify = require('reactify');     // Transforms JSX to JS
var source = require('vinyl-source-stream');    // Use conventional streams with gulp
var concat = require('gulp-concat');    // Concatenates files
var lint = require('gulp-eslint');      // Lint for Js and JSX files

var config = {
  baseUrl: 'http://localhost',
  port: 9002,
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/toastr.css'
    ],
    images: './src/images/*',
    mainJs: './src/main.js',
    dist: './dist',
    lint: 'eslint.config.json'
  }
};

// Start the server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.baseUrl,
    liveReload: true
  });
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open({uri: config.baseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  // publish favicon
  gulp.src('./src/favicon.png')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function () {
  return gulp.src(config.paths.js)
    .pipe(lint({config: config.paths.lint}))
    .pipe(lint.format());
});

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js'/*, 'lint'*/]);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'images', /*'lint', */'open', 'watch']);