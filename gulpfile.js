'use strict'

global.$ = {
	gulp: require('gulp'),
	sass: require('gulp-sass'),
	cleanCSS: require('gulp-clean-css'),
	autoprefixer: require('gulp-autoprefixer'),
	concat: require('gulp-concat'),
	del: require('del'),
	sourcemaps : require('gulp-sourcemaps'),	
	cheerio: require('gulp-cheerio'),
	replace: require('gulp-replace'),
	svgmin: require('gulp-svgmin'),
	svgSprite: require('gulp-svg-sprite'),
	babel: require('gulp-babel'),
	tinypng: require('gulp-tinypng'),
	uglify: require('gulp-uglify'),
	browserSync: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
	$.gulp.series('del'),
	$.gulp.parallel('templates','sass','scripts','img:build'),
	$.gulp.parallel('watch', 'serve'),
	'watch',
	'serve'
	));

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('templates','sass','scripts','fonts','img:dev'),
	$.gulp.parallel('watch', 'serve'),
	'watch',
	'serve'
	));