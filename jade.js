module.exports = function ($) {

	$.gulp.task('jade', function() {
	 
	  	$.gulp.src('./dev/**/*.jade')
	    .pipe($.jade({
	      pretty: true
	    }))
	    .pipe($.gulp.dest('./deploy/'))	
	})

}