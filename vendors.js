module.exports = function ($) {

	var vendor = function (dev, deploy) {
	  	$.gulp.src(dev)
	    .pipe($.gulp.dest(deploy))
	}

	$.gulp.task('vendors', function() {
		//NORMALIZE
		vendor(
			$.dev.bower + '/normalize-css/normalize.css', 
			$.deploy.public.vendorCss + '/normalize'
		)

		// BOOTSTRAP CSS
		vendor(
			$.dev.bower + '/bootstrap/dist/css/bootstrap.min.css', 
			$.deploy.public.vendorCss + '/bootstrap'
		)

		//MODERNIZR
		vendor(
			$.dev.bower + '/modernizr/src/Modernizr.js', 
			$.deploy.public.vendorJS + '/modernizr'
		)

		//ANGULAR
		vendor(
			$.dev.bower + '/angular/angular.min.js', 
			$.deploy.public.vendorJS + '/angular'
		)

		// ANGULAR ROUTE
		vendor(
			$.dev.bower + '/angular-route/angular-route.min.js', 
			$.deploy.public.vendorJS + '/angular-route'
		)

		// BOOTSTRAP JS
		vendor(
			$.dev.bower + '/bootstrap/dist/js/bootstrap.min.js',
			$.deploy.public.vendorJS + '/bootstrap'
		)

		//JQUERY
		vendor(
			$.dev.bower + '/jquery/dist/jquery.min.js',  
			$.deploy.public.vendorJS + '/jquery'
		)

	})
}