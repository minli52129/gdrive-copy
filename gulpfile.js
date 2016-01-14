var uglify = require('uglify');

gulp.task('default', function(){
    // Default task
    
});

gulp.task('build', ['js','html','css']);

gulp.task('js', function() {
    // process js
    gulp.src(['./src/JavaScript.html', './src/Code.gs'])
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    // process css
    gulp.src('./src/Stylesheet.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
    // process html
    gulp.src('./src/Index.html')
        .pipe(gulp.dest('dist'));
});