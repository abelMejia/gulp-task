module.exports = function ($) {
	var vendorStylus = function (dev, deploy) {
	  	$.gulp.src(dev)
	  	.pipe($.stylus())
	    .pipe($.gulp.dest(deploy))
	}

	$.gulp.task('vendors', function() {
		vendorStylus(
			$.dev.bower + '/normalize.styl/normalize.styl', 
			$.deploy.public.css	
		)
	})
}