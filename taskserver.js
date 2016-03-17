module.exports = function ($) {
	$.gulp.task('server', function () {
		require(`${$.server}`)($) //Running server
	}); 
}