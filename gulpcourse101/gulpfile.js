
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const eslint = require("gulp-eslint");
const jasmine = require("gulp-jasmine-phantom");

const paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "css"
    },
    scripts: {
        src: "scripts/**/*.js",
        dest: "js"
    },
    tests:{
        src:"tests/index.test.js",
        vendor:"js/**/*.js"
    }
    
};

gulp.task("styles",()=>{
    return gulp.src(paths.styles.src)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer({browers : ["last 2 versions"]}))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task("scripts", () => {
    return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task("default",()=>{
    return gulp.watch([paths.styles.src,paths.scripts.src],gulp.series("styles","lint","scripts"));
});

gulp.task("lint", () => {
    return gulp.src([paths.scripts.src])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("tests",()=>{
    return gulp.src(paths.tests.src)
        .pipe(jasmine({
            integration : true,
            vendor: paths.tests.vendor
        }));    
});

