module.exports = function ($) {

	$.gulp.task('jade', function() {
	 
	  	$.gulp.src($.dev.dir + '/**/*.jade')
	    .pipe($.jade({
	      pretty: true
	    }))
	    .pipe($.gulp.dest($.deploy.dir))	
	})

}