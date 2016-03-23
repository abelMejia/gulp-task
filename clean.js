module.exports = ($) => {

	$.gulp.task('clean:deploy', () => 
		($.del(`${$.deploy.dir}/**/*`, {
			force: true
		})))
}