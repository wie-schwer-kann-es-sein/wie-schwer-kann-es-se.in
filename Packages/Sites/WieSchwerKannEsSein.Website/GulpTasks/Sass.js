var gulp       = require("gulp");
var sourcemaps = require('gulp-sourcemaps');
var sass       = require("gulp-ruby-sass");
var prefix     = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return sass('Resources/Private/Styles/main-v-*.sass', {sourcemap: true, style: 'compressed'})
        .pipe(prefix("last 5 version", "> 1%", "ie 8", "ie 7"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Resources/Public/Styles/'));
});
