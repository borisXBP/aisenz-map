const gulp = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

gulp.task(
  "handle-js",
  gulp.series(function () {
    return gulp.src(["index.js"]).pipe(uglify()).pipe(gulp.dest("./lib/"));
  })
);

gulp.task(
  "handle-css",
  gulp.series(function () {
    return gulp.src(["index.css"]).pipe(cleanCSS()).pipe(gulp.dest("./lib/"));
  })
);

gulp.task(
  "handle-images",
  gulp.series(function () {
    return gulp.src(["./images/*"]).pipe(gulp.dest("./lib/images/"));
  })
);

gulp.task(
  "handle-img",
  gulp.series(function () {
    return gulp.src(["./img/*"]).pipe(gulp.dest("./lib/img/"));
  })
);

gulp.task(
  "change-path",
  gulp.series("handle-js", "handle-css", "handle-images", "handle-img")
);
