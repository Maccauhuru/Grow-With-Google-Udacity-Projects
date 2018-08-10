const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('default', () => gulp.watch('sass/**/*.scss', gulp.series('styles')));

gulp.task('styles',()=>{
   return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error' , sass.logError))
    .pipe(autoprefixer({
        browsers : ['Last 2 versions']
    }))
    .pipe(gulp.dest('./css/'))
});
