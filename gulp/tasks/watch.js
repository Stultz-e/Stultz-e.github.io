var gulp = require('gulp'),
watch = require ('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {

    browserSync.init({
        /* notify: false, */
        server: true
    });

    watch('./index.html', () => {
        browserSync.reload();
    });

    watch('./assets/styles/**/*.css', () => {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', gulp.series('styles'), () => {
     return gulp.src('./temp/styles/styles.css')
    .pipe(browserSync.stream());
})
