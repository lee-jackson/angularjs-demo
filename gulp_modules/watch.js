var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./sass/**/*.scss', ['sass', 'html']);
  gulp.watch('./scripts/**/*.*', ['siteJS', 'html']);
});
