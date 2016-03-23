module.exports = function ($) {
	$.gulp.task('stylus', function() {
		return $.gulp.src($.dev.dir + '/**/**/*.styl')
	    	.pipe($.stylus())
	    	.pipe($.notify({
		      	message: 'Styles task complete'
		    }))
	    	.pipe($.gulp.dest($.deploy.dir));
	})
}