var gulp      = require("gulp");
var gp_concat = require('gulp-concat');
var gp_uglify = require('gulp-uglify');

gulp.task('js', function(){
    return gulp.src([
                      'Resources/Private/JavaScript/howler.js',
                      'Resources/Private/JavaScript/main.js'
                    ])
        .pipe(gp_concat('main-v-1.0.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('Resources/Public/JavaScript'));
});
