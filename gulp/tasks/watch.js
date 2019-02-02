 var gulp = require('gulp');
 
 gulp.task('watch', function() {
	//watch styles
   gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
 });
