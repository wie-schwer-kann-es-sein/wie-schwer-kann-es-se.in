var gulp         = require("gulp");
const imagemin   = require('gulp-imagemin');
const pngquant   = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant

gulp.task('optimizeImages', () => {
    return gulp.src('Resources/Private/Images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('Resources/Public/Images'));
});
