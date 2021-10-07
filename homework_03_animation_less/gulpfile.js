const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function(done){
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
    done();
})