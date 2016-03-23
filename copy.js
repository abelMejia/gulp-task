module.exports = ($) => {
	const copy = (dev, deploy) => 
		($.gulp.src(`${dev}`)
	    .pipe($.gulp.dest(`${deploy}`)))
	
	$.gulp.task('copy', () => {
		copy(
			`${$.dev.public.img}/**/*`, 
			$.deploy.public.img	
		)

	})

}