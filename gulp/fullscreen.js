/** @format */

const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task(
  "fullScreen-js", // 交互绘制和编辑
  gulp.series(function () {
    return gulp
      .src([
        "index.js",
        "./leaflet/plugins/Leaflet.fullscreen-gh-pages/dist/Leaflet.fullScreen.min.js",
      ])
      .pipe(concat("index.js"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "fullScreen-css",
  gulp.series(function () {
    return gulp
      .src([
        "index.css",
        "./leaflet/plugins/Leaflet.fullscreen-gh-pages/dist/leaflet.fullscreen.css",
      ])
      .pipe(concat("index.css"))
      .pipe(gulp.dest("./"));
  })
);

gulp.task(
  "fullScreen-images",
  gulp.series(function () {
    return gulp
      .src(["./leaflet/plugins/Leaflet.fullscreen-gh-pages/dist/*.png"])
      .pipe(gulp.dest("./lib/img/"));
  })
);

gulp.task(
  "fullScreen", // 交互绘制和编辑
  gulp.series("fullScreen-js", "fullScreen-css", "fullScreen-images")
);
