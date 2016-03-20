var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var del = require('del');

var paths = {
  //IMPORTANT: Use to block tasks from parsing this massive directory!
  restricted: ['!node_modules/**/*', '!bower_components/**/*'],
  content: ['_src/*.html'],
  styles: ['_src/assets/css/**/*.css'],
  scripts: ['_src/assets/js/**/*.js'],
  images: ['_src/assets/img/**/*'],
};

//  Developement Preview
gulp.task('browser-sync', function() {
  browserSync.init({
    server: './app'
  });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['browser-sync']);
