module.exports = function ($) {
	$.gulp.task('watch', function() {
		$.gulp.watch('./dev/**/*.js', ['scripts'])
		$.gulp.watch('./dev/**/*.jade', ['jade'])
		$.gulp.watch('./dev/**/*.styl', ['stylus'])
	});
}