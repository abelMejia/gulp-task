module.exports = function ($) {
	$.gulp.task('scripts', function() {

		return $.gulp.src($.dev.dir + '/**/*.js') 
			.pipe($.babel({
				presets: ['es2015']
			}))
			.pipe($.wrap( 
				`( function() {\n
					<%= contents %>\n
				})();` 
			))
			.pipe($.gulp.dest($.deploy.dir));	
	})
}