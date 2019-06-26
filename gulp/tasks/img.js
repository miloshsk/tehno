module.exports = function() {
	$.gulp.task('img:dev', function() {
		return $.gulp.src('src/img/**/*.{png,jpg,gif}')
			.pipe($.gulp.dest('build/img/'));
	});
	$.gulp.task('img:build', function() {
		return $.gulp.src('src/img/**/*.{png,jpg,gif}')
			.pipe($.tinypng('TNPH4JWzE1uCqMIsVl098QA6zJnABI8t'))
			.pipe($.gulp.dest('build/img/'));
	});
}