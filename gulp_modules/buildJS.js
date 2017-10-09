var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('siteJS', function() {
  return gulp.src('./scripts/*.js')
    .pipe(concat('site.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('vendorJS', function() {
  return gulp.src('./node_modules/angular/angular.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('buildJS', ['vendorJS', 'siteJS']);
