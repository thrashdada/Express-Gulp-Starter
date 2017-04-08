var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
	return gulp.src('./public/scss/*.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
	gulp.watch('./public/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
