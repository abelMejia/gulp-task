module.exports = function ($) {
	var copy = function (dev, deploy) {
	  	$.gulp.src(dev)
	    .pipe($.gulp.dest(deploy))
	}

	$.gulp.task('copy', function() {
		copy(
			'./dev/public/img/**/*', 
			'deploy/public/img'	
		)

		copy(
			'./dev/**/**/*.ico', 
			'deploy/'	
		)

		copy(
			'./bower_components/modernizr/src/Modernizr.js', 
			'deploy/public/js/vendor'	
		)

	})
}