module.exports = function() {
	$.gulp.task('sass', function() {
	return $.gulp.src('src/sass/**/main.sass')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			includePaths: require('node-normalize-scss').includePaths
		}).on('error', $.sass.logError))
		.pipe($.concat('main.css'))
		.pipe($.autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe($.cleanCSS({
		    	level: 2
		    }))
        .pipe($.sourcemaps.write())
		.pipe($.gulp.dest('build/css'))
		.pipe($.browserSync.reload({
			stream:true
		}));
});
}