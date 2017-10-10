const gulp = require('gulp'),
      concat = require('gulp-concat'),
      browserify = require('browserify'),
      stream = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      sourcemaps = require('gulp-sourcemaps'),
      stringify = require('stringify')
      jshint = require('gulp-jshint');

gulp.task('siteJS', ['jsHint'], () =>
  browserify({
    entries: ['./scripts/app.js'],
    debug: true
  })
  .transform(stringify, {
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
  .pipe(gulp.dest('./app/js/'))
);

gulp.task('vendorJS', () => {
  var files = [
    './node_modules/angular/angular.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js'
  ];

  return gulp.src(files)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('jsHint', () =>
  gulp.src('./scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(jshint.reporter('fail'))
);

gulp.task('buildJS', ['vendorJS', 'siteJS']);
