module.exports = function ($) {
	$.gulp.task('scripts', function() {

		return $.gulp.src($.dev.dir + '/**/*.js') 
			.pipe($.babel({
				presets: ['es2015']
			}))
			.pipe($.gulp.dest($.deploy.dir));	
	})
}