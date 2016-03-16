module.exports = function ($) {

	$.gulp.task('clean:deploy', function() {
		return $.del('./deploy/**/*', {
			force: true
		});	
	})
}
