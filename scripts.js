module.exports = function ($) {
	$.gulp.task('scripts', function() {

		return $.gulp.src($.dev.public.dir + '/**/*.js') 
			.pipe($.babel({
				presets: ['es2015']
			}))
			.pipe($.notify({
		      	message: 'Script task complete'
		    }))
			.pipe($.wrap( 
				`( function() {\n
					<%= contents %>\n
				})();` 
			))
			.pipe($.gulp.dest($.deploy.public.dir))	
	})
}