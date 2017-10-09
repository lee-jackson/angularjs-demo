var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    stream = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    stringify = require('stringify');

gulp.task('siteJS', function() {
  return browserify({
    entries: ['./scripts/app.js'],
    debug: true
  }).transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] }
  })
  .bundle()
  .pipe(stream('site.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({
    loadMaps: true
  }))
  .pipe(sourcemaps.write('./', {
    includeContent: true
  }))
  .pipe(gulp.dest('./app/js/'));
});

gulp.task('vendorJS', function() {
  var files = [
    './node_modules/angular/angular.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js'
  ];

  return gulp.src(files)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('buildJS', ['vendorJS', 'siteJS']);
