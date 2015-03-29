var gulp = require('gulp'),
    gutil = require('gulp-util'),
    runSequence = require('run-sequence');

// Scripts
require('./gulp/tasks/scripts')(gulp);
require('./gulp/tasks/rjs')(gulp);
require('./gulp/tasks/react')(gulp);

// Misc
require('./gulp/tasks/clean')(gulp);

//
// Gulp Configurations
//

gulp.task('default', function () {

  runSequence(
    'clean',
    ['scripts', 'react']
  );

});

gulp.task('prod', function () {
  gutil.env.type = 'production';

  runSequence(
    'clean',
    ['scripts', 'react'],
    'rjs:prod'
  );

});
