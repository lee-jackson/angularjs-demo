var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', ['html']);
});
