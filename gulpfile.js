const gulp = require("gulp")
const sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return sass('./sass/*.sass')
      .on('error', sass.logError)
      .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  gulp.watch('./sass/*.sass', ['sass'])
})
