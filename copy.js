module.exports = function ($) {
	var copy = function (dev, deploy) {
	  	$.gulp.src(dev)
	    .pipe($.gulp.dest(deploy))
	}

	$.gulp.task('copy', function() {
		copy(
			$.dev.public.img + '/**/*', 
			$.deploy.public.img	
		)

		copy(
			$.dev.dir + '/**/**/*.ico', 
			$.deploy.dir	
		)

	})
}