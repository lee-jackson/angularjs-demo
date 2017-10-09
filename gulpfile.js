var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp_modules');

gulp.task('default', ['buildJS', 'sass', 'serve', 'watch']);
