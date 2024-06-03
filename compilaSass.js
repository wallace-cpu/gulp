const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const { sass } = require("./gulpfile");

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))

        .pipe(gulp.dest("./build/styles"));
}
exports.compilaSass = compilaSass;
