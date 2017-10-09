var gulp = require('gulp')
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass', ['sassLint'], function(){
  return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
});

gulp.task('sassLint', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
