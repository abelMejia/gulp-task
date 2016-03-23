module.exports = function ($) {

	$.gulp.task('jade', function() {
	 
	  	$.gulp.src([
	  		$.dev.dir + '/**/*.jade',
	  		'!' + $.dev.dir + '/public/_**/**/*.jade'
	  	])
	  	.pipe($.data(function(file) {  
	  		$.fn.dataJade(file) 
	  	}))
	    .pipe($.jade({
	      pretty: true
	    }))
	    .pipe($.gulp.dest($.deploy.dir))	
	})

}