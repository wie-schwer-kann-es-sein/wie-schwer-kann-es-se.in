var gulp   = require("gulp");
var rename = require("gulp-rename");

gulp.task('copy', ['copy-normalize']);

gulp.task('copy-normalize', function(){
    return gulp.src("Resources/Private/BowerComponents/normalize-css/normalize.css")
               .pipe(rename("normalize.scss"))
               .pipe(gulp.dest("Resources/Private/BowerComponents/normalize-css/"));
});
