let gulp = require('gulp');
let concat = require('gulp-concat');
let umd = require('gulp-umd');

gulp.task('default', ['concat', 'umd']);

gulp.task('concat', function () {
	return gulp.src('./src/*.js')
		.pipe(concat('pselect.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('umd', function () {
	return gulp.src('./dist/pselect.js')
		.pipe(umd())
		.pipe(gulp.dest('./dist'));
});
