module.exports = function() {
	$.gulp.task('templates', function() {
		return $.gulp.src('src/html/*.html')
		.pipe($.gulp.dest('build'))
		.pipe($.browserSync.reload({
			stream:true
		}));
	});
}