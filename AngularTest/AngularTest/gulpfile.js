/// <binding BeforeBuild='build' />

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

var config = {
    //Include all js files, but exclude any min.js files
    src: ['app/**/*.js', '!app/**/*.min.js']
}

gulp.task('clean', function () {
    //del is async, so use return so gulp knows when it's completed.
    return del(['dist/all.min.js']);
});

gulp.task('build', ['clean'], function () {
    return gulp.src(config.src)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build'], function () { });