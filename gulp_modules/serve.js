const gulp = require('gulp')
      connect = require('gulp-connect');

gulp.task('serve', () =>
  connect.server({
    root: 'app',
    livereload: true
  })
);

gulp.task('html', () =>
  gulp.src('./app/*.html')
    .pipe(connect.reload())
);
