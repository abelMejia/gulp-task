module.exports = ($) => {

	const vendor = (dev, deploy) => 
		$.gulp.src(`${dev}`)
	    .pipe($.gulp.dest(`${deploy}`))

	$.gulp.task('bootstrap-css', () => 
		vendor(
			`${$.dev.bower}/bootstrap/dist/css/bootstrap.min.css`, 
			`${$.deploy.public.vendorCss}/bootstrap`
		)
	)

	$.gulp.task('bootstrap-js', () => 
		vendor(
			`${$.dev.bower}/bootstrap/dist/js/bootstrap.min.js`, 
			`${$.deploy.public.vendorJS}/bootstrap`
		)
	)

	$.gulp.task('normalize-css', () => 
		vendor(
			`${$.dev.bower}/normalize-css/normalize.css`, 
			`${$.deploy.public.vendorCss}/normalize`
		)
	) 

	$.gulp.task('modernizr', () => 
		vendor(
			`${$.dev.bower}/modernizr/src/Modernizr.js`, 
			`${$.deploy.public.vendorJS}/modernizr`
		)
	) 

	$.gulp.task('angular', () => 
		vendor(
			`${$.dev.bower}/angular/angular.min.js`, 
			`${$.deploy.public.vendorJS}/angular`
		)
	) 

	$.gulp.task('angular-route', () => 
		vendor(
			`${$.dev.bower}/angular-route/angular-route.min.js`, 
			`${$.deploy.public.vendorJS}/angular-route`
		)
	)

	$.gulp.task('jquery', () => 
		vendor(
			`${$.dev.bower}/jquery/dist/jquery.min.js`, 
			`${$.deploy.public.vendorJS}/jquery`
		)
	) 
	
	$.gulp.task('vendors', (cb) => 
		$.runSequence([
			'normalize-css', 
			'bootstrap-css', 
			'modernizr', 
			'angular',
			'angular-route',
			'bootstrap-js',
			'jquery'
		], cb))
}