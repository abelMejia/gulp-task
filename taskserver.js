module.exports = function ($) {
	$.gulp.task('server', function () {
		require(`${$.server}/server`)($) //Running server
	}); 
}