var gulp         = require("gulp");
var browserSync  = require("browser-sync").create();
var gulpSequence = require('gulp-sequence');
var requireDir   = require('require-dir');

requireDir('./GulpTasks');


gulp.task('serve', function() {
    browserSync.init({
        proxy: "localhost:8081"
    });
    gulp.watch("Resources/Private/Styles/**/*.sass", ['sass']);
    gulp.watch("Resources/Private/JavaScript/**/*.js", ['js']);
    gulp.watch("Resources/Private/Images/**/*", ['optimizeImages']);
    gulp.watch("Resources/Private/Templates/**/*").on('change', browserSync.reload);
    gulp.watch("Resources/Private/TypoScript/**/*").on('change', browserSync.reload);
    gulp.watch("Resources/Public/**/*").on('change', browserSync.reload);
    gulp.watch("Web/*.html").on('change', browserSync.reload);
});


gulp.task('default', gulpSequence(['js','sass','optimizeImages', 'copy']));
