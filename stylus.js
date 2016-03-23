module.exports = ($) => {
	$.gulp.task('stylus', () => {
		return $.gulp.src(`${$.dev.dir}/**/**/*.styl`)
	    	.pipe($.stylus())
	    	.pipe($.notify({
		      	message: 'Styles task complete'
		    }))
	    	.pipe($.gulp.dest(`${$.deploy.dir}`));
	})
}