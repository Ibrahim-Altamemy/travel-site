 var gulp = require('gulp');
 var postcss = require('gulp-postcss');
const sass = require('gulp-sass');
var pi = require('postcss-import')
 
 
 gulp.task("styles",function(){
   return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([pi]))
			.pipe(sass())
			.pipe(gulp.dest('./app/temp/styles/'))
 });