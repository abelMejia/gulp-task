module.exports = function ($) {
	$.gulp.task('stylus', function() {
		return $.gulp.src('./dev/**/**/*.styl')
	    	.pipe($.stylus())
	    	.pipe($.gulp.dest('deploy/'));
	})
}