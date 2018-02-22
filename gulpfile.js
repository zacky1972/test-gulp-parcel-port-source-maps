const gulp = require('gulp');
const parcel = require('gulp-parcel');

gulp.task('parcel-bundler', function() {
  gulp
    .src('./index.html', { read: false })
    .pipe(parcel({
    	watch: true,
    	outDir: './dist'
    }))
    .pipe(gulp.dest('dist'))
})
