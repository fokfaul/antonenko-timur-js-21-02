const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const fancyLog = require('fancy-log');
const path = {
    pages: ["./src/*.html", "./src/*.css"]
}

gulp.task('copy-html', () => gulp.src(path.pages).pipe(gulp.dest('./dist')))

const watchifyBrowserify = watchify(browserify({
        basedir: '.',
        entries: ["./src/main.ts"],
        cache: {},
        debug: true,
        packageCache: {}
    }).plugin(tsify))

const bundle = () => watchifyBrowserify.bundle()
                                       .on('error', fancyLog)
                                       .pipe(source('bundle.js'))
                                       .pipe(gulp.dest('./dist'))

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle))

watchifyBrowserify.on('update', bundle);
watchifyBrowserify.on('log', fancyLog);