module.exports = function ($) {
	var vendorStylus = function (dev, deploy) {
	  	$.gulp.src(dev)
	  	.pipe($.stylus())
	    .pipe($.gulp.dest(deploy))
	}

	$.gulp.task('vendors', function() {
		vendorStylus(
			'./bower_components/normalize.styl/normalize.styl', 
			'deploy/public/css'	
		)
	})
}