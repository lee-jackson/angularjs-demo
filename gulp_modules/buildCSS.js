const gulp = require('gulp')
      sass = require('gulp-sass'),
      sassLint = require('gulp-sass-lint');

gulp.task('sass', ['sassLint'], () =>
  gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
);

gulp.task('sassLint', () =>
  gulp.src('./sass/**/*.scss')
    .pipe(sassLint({
      rules: {
        'class-name-format': 0
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
);
