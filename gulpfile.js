var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

var numWatches = 0;

gulp.task('compile-sass', function(){
	numWatches++;

	console.log('Build #: ' + numWatches );
	gulp.src( './sass/*.scss')
		.pipe( sass().on('error', sass.logError))
		.pipe( gulp.dest('./css/'));
} );

gulp.task('default',function() {
    gulp.watch('./sass/*.scss',['compile-sass']);
});
