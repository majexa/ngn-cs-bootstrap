var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: 'build/public',
      index: 'index.html'
    }
  });
  gulp.watch('index.html', ['copy-index']);
  gulp.watch('m/**/*', ['copy-m']);

  gulp.watch([
    process.env.NGN_ENV_FOLDER + '/ngn/i/js/ngn/**/*.js',
    process.env.NGN_ENV_FOLDER + '/ngn/i/css/**/*.css',
    'src/js/**/*'
  ], ['ngn-build']);

  var timeoutId;
  gulp.watch([
    'build/public/m/css/*.css',
    'build/public/m/js/*.js',
    'build/public/index.html'
  ]).on('change', function (r) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      browserSync.reload()
    }, 200)
  });

  gulp.watch([
    'models/*.json'
  ], ['crud-routes-gen', 'ngn-build']);
});
