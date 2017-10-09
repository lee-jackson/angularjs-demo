var gulp = require('gulp')
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

gulp.task('sassLint', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('sass', ['sassLint'], function(){
  return gulp.src('sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});
