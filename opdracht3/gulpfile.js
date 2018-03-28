var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
});
});

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('src/assets/css/**/*.css', browserSync.reload);
  gulp.watch('src/**/*.html', browserSync.reload);
  gulp.watch('src/assets/javascript/*.js', browserSync.reload);
  // Other watchers
});
