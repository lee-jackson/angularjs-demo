var gulp = require('gulp')
    sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});
