module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/sass/**/*.sass',$.gulp.series('sass'));
		$.gulp.watch('src/html/**/*.html',$.gulp.series('templates'));
		$.gulp.watch('src/js/**/*.js',$.gulp.series('scripts'));
});
}