/*eslint-env node*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');


gulp.task('default', () => gulp.watch('sass/**/*.scss', gulp.series('styles')));

gulp.task('styles',()=>{
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error' , sass.logError))
        .pipe(autoprefixer({
            browsers : ['Last 2 versions']
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('lintify', () => {
    return (
        gulp.src(['scripts/*.js'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
    );
});

gulp.watch('sass/**/*.scss', gulp.series('styles'));
