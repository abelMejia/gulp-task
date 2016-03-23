module.exports = ($) => {
	$.gulp.task('server', function () {
		require(`${$.server}`)($) 
	})
}