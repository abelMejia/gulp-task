module.exports = ($) => {
	$.gulp.task('watch', () => {
		$.gulp.watch($.dev.dir + '/**/*.js', ['scripts'])
		$.gulp.watch($.dev.dir + '/**/*.jade', ['jade'])
		$.gulp.watch($.dev.dir + '/**/*.styl', ['stylus'])
	});
}