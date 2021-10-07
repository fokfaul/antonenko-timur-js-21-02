const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

gulp.task('less', function(done){
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
    done();
})

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    })
})

gulp.task('less:watch', function(){
    gulp.watch('./less/**/*.less', gulp.series('less'))
})