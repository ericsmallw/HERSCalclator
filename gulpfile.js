/**
 * Created by Eric on 3/18/2017.
 */
var gulp = require('gulp');
var argv = require('yargs').argv;
var shell = require('gulp-shell');

gulp.task('deploy', () => {
    if(argv.branch == 'test'){
        return gulp.src('*.js', {read: false}).pipe(shell([
            'echo test2 >> test4.txt'
        ]));
    }
});
