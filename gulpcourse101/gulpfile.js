
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "css"
    }
};

gulp.task("styles",()=>{
    return gulp.src(paths.styles.src)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer({browers : ["last 2 versions"]}))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task("default",()=>{
    return gulp.watch(paths.styles.src,gulp.series("styles"));
});

