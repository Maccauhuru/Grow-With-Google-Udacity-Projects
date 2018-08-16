
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const eslint = require("gulp-eslint");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");

const paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "dist/css"
    },
    scripts: {
        src: "scripts/**/*.js",
        dest: "js"
    },
    "scripts-dist": {
        src: "scripts/**/*.js",
        dest: "dist/js"
    },
    html: {
        src : "./index.html",
        dest : "dist/"
    },
    images:{
        src:"img/*",
        dest:"dist/img"
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
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task("scripts-dist", () => {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths["scripts-dist"].dest));
});

gulp.task("default",()=>{
    return gulp.watch([paths.images.src,paths.html.src,paths.styles.src, paths.scripts.src ]
        ,gulp.series("copy-images","copy-html","styles","lint","scripts"));
});

gulp.task("lint", () => {
    return gulp.src([paths.scripts.src])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("copy-html", () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task("copy-images", () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin(
            {
                progressive: true,
                use: [pngquant()]
            }
        ))
        .pipe(gulp.dest(paths.images.dest));
});

//production task

gulp.task("dist",(done)=>{
    done();
    return ["copy-images", "copy-html", "styles", "lint", "scripts-dist"];
});

