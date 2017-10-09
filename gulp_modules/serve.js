var gulp = require('gulp')
    connect = require('gulp-connect');

gulp.task('serve', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
