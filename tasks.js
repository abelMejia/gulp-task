module.exports = function ($) {

	$.gulp.task('default', function(callback) {
	  	$.runSequence('clean:deploy', 'scripts',
	              ['copy', 'vendors', 'stylus', 'jade','watch','server'],
	              callback);
	}); 
}
