module.exports = ($) => {

	$.gulp.task('default', (cb) => {
	  	$.runSequence(
	  		'clean:deploy', 
	  		'scripts',
	     	[
	        	'copy', 
	            'vendors', 
	            'stylus', 
	            'jade',
	            'watch',
	            'server'
	        ],
	    cb)
	})
}
